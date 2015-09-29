Meteor.methods({
    
	'insertIncident':function(incidentObj){
		Incidents.insert(incidentObj);
		console.log("Incident reported on server side");
	},

	'markStatus':function(id,status){
		Incidents.update(id,{$set: {status: status}});
		console.log("Incident marked as" + status + "on server side");

	},

	'insertSubscriber':function(subscriberObj){
		Subscribers.insert(subscriberObj);
		console.log("Added subscriber on server side");
	},

	'SetRoles':function(user){
		console.log("Assigning Roles to:"+user._id);
		Roles.setUserRoles(user, ['operator','admin']);
		console.log(user._id + " Set as Operator/admin");
	}


});