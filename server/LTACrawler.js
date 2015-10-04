/**
Crawler for Real Life Traffic Data
from Singapore Government Data API
@Author - Tay Yi 

Usage - var LTA_HEADERS omitted from Git Repo, please get your own credentials!

LTA_HEADERS ={
	'AccountKey' : "GETYOUROWNKEY",
	'UniqueUserId' : "GETYOUROWNKEY",
	'accept' : "application/json"
}

*/


URL_ENDPOINT = "http://datamall.mytransport.sg/ltaodataservice.svc/IncidentSet"

Meteor.methods({

	getTrafficIncidents:function(){
		/* Get Traffic Incidents from LTA dataset */

		Meteor.http.call("GET", URL_ENDPOINT, {headers:LTA_HEADERS}, function(error,response) {
			/*Callback*/
			if(error){
				console.log(error);
			}
			else{
				//console.log(response.data['d']);
				_.each(response.data['d'],function(data){
					var incident = {
							'location':{'lat':data['Latitude'],'lng':data['Longitude']},
							'type':data['Type'],
							'reportedTime':Date(data['CreateDate'].replace(/\D/g,'')),
							'comment':data['Message'],
							'source':'LTA',
							'contact':'LTA',
							'LTA_ID':data['IncidentID']
						};
					//console.log(incident);
					var checker = Incidents.find({'LTA_ID':incident['LTA_ID']}).fetch();
					if(checker.length==0){
						Incidents.insert(incident); 
					}
					else{
						//console.log("Duplicate Incident, do not insert");
					}
					});
				};

			});


		}

	



});

Meteor.startup(function(){

	//Meteor.call('getTrafficIncidents');
	//convertDatesToObjects();

});

convertDatesToObjects = function(){

	var incidents = Incidents.find().fetch();

	_.each(incidents,function(incident,index){
		date = incident['reportedTime'];
		console.log(date);
		date = new Date(date);
		console.log(date);
		incident['reportedTime']=date;
		//update the whole object
		Incidents.update(incident._id,incident);
	});


}