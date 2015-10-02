//Should refactor to somewhere else

//Currently Stats includes several templates including incident views
//Will refactor into seperate files in the future when stuff gets bloated

Template.stats.helpers({

	'IncidentCount':function(){
		var now = moment();
		var startoftoday = moment().startOf('day');
		return Incidents.find({'reportedTime':{ $gte : startoftoday._d, $lt: now._d }}).count();
	},

	'UnresolvedIncidents':function(){
		return Incidents.find({'status':'unresolved'}).count();
	},
	'UrgentIncidents':function(){
		return Incidents.find({'status':'urgent'}).count();
	}

});

Template.stats.events({
	'click #showincidents':function(){
		var incidentview = Session.get('incidentview');
		Session.set("incidentview",!incidentview);
		Session.set("SingleIncidentView",false); //So Single Incidents don't show up!
	}
})



