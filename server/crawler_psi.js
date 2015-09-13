/*

Server side methods for farming haze data
Cron jobs will autopopulate local collection with haze data
Alternatively, we could just make an API call whenever we need haze data,
but collecting them would be better because API calls do not allow calls into the past.

Current issues - When server down for whatever reason, cron jobs don't run. should look into spinning off another
instance of server to handle crawling. But whatever, for now. 

-Using NEA's Weather API
*/


//Adds an hourly cron job of collecting hourly PSI-levels
SyncedCron.add({
  name: 'Collecting hourly PSI-levels from NEA-API',
  schedule: function(parser) {
    // parser is a later.parse object
    return parser.text('every 1 hours');
  },
  job: function() {
    crawlPSI();
  }
});


/*
crawlPSI function
==================
1) CrawlPSI makes a call to NEA's API. 
2) Retrieves XML data, parses it, formarts it to JSON. (conversion makes it super messy tho)
3) Further cleaning is done, packaged into a nice little JSON object
4) inserted intocollections. 
*/

crawlPSI = function(){
	console.log("Crawling PSI levels...");
	//Make API call to NEA's API
	var data = Meteor.http.call("GET", "http://www.nea.gov.sg/api/WebAPI?dataset=psi_update&keyref=781CF461BB6606ADE5BD65643F1781747BB88225CF8B608D");

	//This following function is an async callback! Do not try returning values from this function. Will not work. 
	xml2js.parseString(data.content, function(err, res) {
		
		var res = JSON.stringify(res);	//converts to JSON string then to JSON object. Do I really need 2 steps for this? :(
		var obj = JSON.parse(res);
		var region = obj["channel"]['item'][0]['region']; // assign variable once, save computational costs? 

		for(var i=0;i<region.length;i++){		//enumerate Regions from XML-ish Json data. Currently 6 regions. 
			
			//Convert to Moment Date time
			var timestamp = moment(region[i]['record'][0]['$']['timestamp'], "YYYYMMDDHHmmss");

			var PSIrecord={				
				region:region[i]['id'][0],
				lat:region[i]['latitude'][0],
				lng:region[i]['longitude'][0],
				timestamp:timestamp
			};

			var readingObj = region[i]['record'][0]['reading']; 
			var newreadinglist = [];

			//a nested loop, to format the inner lists nicely.
			for(var j=0;j<readingObj.length;j++){
				var reading={
					type:readingObj[j]['$']['type'],
					value:readingObj[j]['$']['value']};
				newreadinglist.push(reading);
			}
			
			PSIrecord['reading'] = newreadinglist;
			//Parsing and tracing this messy json format officially caused a headache 
			
			//TODO:Check for duplicate entries
			PSI.insert(PSIrecord);		//Insert PSIrecord into Mongo

			
			}

	
									});
	
};

convertFuckingDates = function(){
	//I'm damn pissed because I wiped the database by mistake. FUCK MY LIFE
	//Because of stupid time format
	//Someone needs to refactor this name, i'm too pissed atm
	var allPSI = PSI.find().fetch();
	for(var i=0;i<allPSI.length;i++){
		console.log(allPSI[i].timestamp);
		var a = moment(allPSI[i].timestamp, "YYYYMMDDHHmmss");
		console.log(a._d);
		PSI.update(allPSI[i]._id,{$set:{timestamp:a._d}});

	}

}



SyncedCron.start();

Meteor.startup(function() {
	//this should be run periodically, but this startup function here is to test the functionality
	//In production, please use SyncedCron.start()
		//crawlPSI();
		//convertFuckingDates();
 
});
