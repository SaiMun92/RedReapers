/**
 * Startup Functionality for Client-side
 * Loads google maps
 * Subscribe to relevant data from wire
 * Set Sessions to default
 */

  Meteor.startup(function() {

    GoogleMaps.load();

    //Client Side Subscriptions
    Meteor.subscribe('All-Incidents');
    Meteor.subscribe("All-Haze");  
    Meteor.subscribe('userData');

	//Session Defaults
	Session.setDefault("incidentview",false);
	Session.setDefault("psiView",true);

  });


