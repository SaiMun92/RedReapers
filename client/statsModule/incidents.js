
Template.incidentview.helpers({

	'Incidents':function(){
		//Used when user focuses on a single incident
   	 	if(Session.get('SingleIncidentView')){
   			return Incidents.find({'_id':Session.get('SingleIncidentView')}).fetch();
   	}
		return Incidents.find({},{sort: {reportedTime: -1}}).fetch();
	},



});

Template.incidentview.events({

	'keyup #search-box': _.throttle(function(e) {
		console.log("searching..");
		var text = $(e.target).val().trim();
		//IncidentSearch.search(text);
		}, 200),


	'click #showlocation':function(){
		console.log("Clicked");
		panorama.setVisible(false);
		GoogleMaps.maps.map.instance.setZoom(15);
		GoogleMaps.maps.map.instance.setCenter(this.location);
			},

	'click #showpanorama':function(){

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
		Meteor.call('markStatus',this._id,'verified');
		IncidentSearch.search(IncidentSearch.getCurrentQuery());
		var text = IncidentSearch.getCurrentQuery();
		console.log("Text:"+text);
		IncidentSearch.search("");
		IncidentSearch.search(text);
	},

	'click #markresolved':function(){
		Meteor.call('markStatus',this._id,'resolved');
		IncidentSearch.search(IncidentSearch.getCurrentQuery());
		var text = IncidentSearch.getCurrentQuery();
		console.log("Text:"+text);
		IncidentSearch.search("");
		IncidentSearch.search(text);
	},

	'click #markurgent':function(){
		Meteor.call('markStatus',this._id,'urgent');
		var text = IncidentSearch.getCurrentQuery();
		console.log("Text:"+text);
		IncidentSearch.search("");
		IncidentSearch.search(text);
	}
});