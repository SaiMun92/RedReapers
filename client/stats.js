//Should refactor to somewhere else
mo.configure({
  formatTokens: {
    'shortDate': 'D MMM YY', //3 Jan 15
    'longDate': 'Do [of] MMMM[,] YYYY', //3rd of January, 2015
    'longDatewithtime': 'Do [of] MMMM[,] YYYY hh:mm:ss'
  }
});

//Currently Stats includes several templates including incident views
//Will refactor into seperate files in the future when stuff gets bloated

Template.stats.helpers({

	'Incidents':function(){
		return Incidents.find().fetch();
	},

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


Template.incidentview.helpers({

	'Incidents':function(){
		return Incidents.find({},{sort: {reportedTime: -1}}).fetch();
	}
});

Template.incidentview.events({

	'click #showlocation':function(){
		console.log("Clicked");
		panorama.setVisible(false);
		GoogleMaps.maps.map.instance.setZoom(15);
		GoogleMaps.maps.map.instance.setCenter(this.location);
		console.log(this.location);
			},

	'click #showpanorama':function(){

		//My vibe says there is a better way to do this
		GoogleMaps.maps.map.instance.setStreetView(panorama);
		panorama.setPosition(this.location);
		panorama.setPov(({
				heading: 265,
				pitch: 0
				}));
		panorama.setVisible(true);
		},

	'click #takeaction':function(){
		Modal.show('actionModal', this);

	},

	'click #markverified':function(){
		Meteor.call('markResolved',this._id,'verified');

	},

	'click #markresolved':function(){
		Meteor.call('markResolved',this._id,'resolved');

	},
	'click #markurgent':function(){
		Meteor.call('markResolved',this._id,'urgent');

	}

		

});

Template.singleincidentview.helpers({

	'SingleIncident':function(){
		var id = Session.get("SingleIncidentView");
		if (id){
		return Incidents.findOne(id);}
	}

});

Template.singleincidentview.events({



});
