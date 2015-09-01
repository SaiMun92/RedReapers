Meteor.methods({
    
	'insertIncident':function(incidentObj){
		Incidents.insert(incidentObj);
		console.log("Incident reported on server side");
	}


});