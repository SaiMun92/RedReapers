  Meteor.startup(function() {
    GoogleMaps.load();
    Meteor.subscribe('All-Incidents');
    Meteor.subscribe("All-Haze");  
    Meteor.subscribe('userData');
  });

//Session Defaults
  Session.setDefault("incidentview",false);