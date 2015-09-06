Meteor.methods({
    
	'insertIncident':function(incidentObj){
		Incidents.insert(incidentObj);
		console.log("Incident reported on server side");
	},

	'markResolved':function(id,status){
		Incidents.update(id,{$set: {status: status}});
		console.log("Incident marked resolved on server side");

	}


});