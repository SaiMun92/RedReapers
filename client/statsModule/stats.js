//Should refactor to somewhere else

//Currently Stats includes several templates including incident views
//Will refactor into seperate files in the future when stuff gets bloated

Template.stats.helpers({

	'IncidentsToday':function(){
		var now = new Date();
		var startoftoday = moment().startOf('day').toDate();
		//return Incidents.find({'reportedTime':{ $gte : d, $lte: now }}).fetch();
		return Incidents.find().fetch();
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



