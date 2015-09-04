  Meteor.startup(function() {
    GoogleMaps.load();
    Meteor.subscribe('All-Incidents');  
  });

//Session Defaults
  Session.setDefault("incidentview",false);