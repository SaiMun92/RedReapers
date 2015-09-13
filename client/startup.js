  Meteor.startup(function() {
    GoogleMaps.load();
    Meteor.subscribe('All-Incidents');
    Meteor.subscribe("All-Haze");  
  });

//Session Defaults
  Session.setDefault("incidentview",false);