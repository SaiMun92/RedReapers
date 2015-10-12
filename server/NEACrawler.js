/** 
*  @function (CrawlPSI makes a call to NEA's API.)
*  Retrieves XML data, parses it, formats it to JSON. (conversion makes it super messy tho)
*  Further cleaning is done, packaged into a nice little JSON object inserted intocollections. 
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
		var AllRegionsRecord = [];

		for(var i=0;i<region.length;i++){		//enumerate Regions from XML-ish Json data. Currently 6 regions. 
			
			//Convert to Moment Date time
			var timestamp = moment(region[i]['record'][0]['$']['timestamp'], "YYYYMMDDHHmmss");

			var PSIrecord={				
				region:region[i]['id'][0],
				lat:region[i]['latitude'][0],
				lng:region[i]['longitude'][0],
				timestamp:timestamp._d
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
			
			//One record per crawl, all regions in one collection.
			//Is this better? I think so. for now. I hope :) 
			AllRegionsRecord.push(PSIrecord);
			AllRegionsRecord['timestamp'] = timestamp._d;
			}
			PSI.insert(AllRegionsRecord);		//Insert PSIrecord into Mongo
	
									});	
};


/** @function - Utility Function, for testing DO NOT RUN in production*/
convertDates = function(){
	var allPSI = PSI.find().fetch();
	for(var i=0;i<allPSI.length;i++){
		console.log(allPSI[i].timestamp);
		var a = moment(allPSI[i].timestamp, "YYYYMMDDHHmmss");
		console.log(a._d);
		PSI.update(allPSI[i]._id,{$set:{timestamp:a._d}});
	}

},


/** @function - Utility Function, for testing DO NOT RUN in production*/
appendTimestamp = function(){
	var cursor = PSI.find();
	cursor.forEach(function(doc){
  			var timestamp = doc[0].timestamp;
  			PSI.update(doc._id,{$set:{timestamp:timestamp}});
	});

}


/** @function - Utility Function, for testing DO NOT RUN in production*/
Meteor.startup(function() {
	/**
	this should be run periodically, but this startup function here is to test the functionality
	in production, please use SyncedCron.start()
	*/

	//crawlPSI();
	//convertDates();
	//appendTimestamp();
});
