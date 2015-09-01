  Meteor.startup(function() {
    GoogleMaps.load();
    Meteor.subscribe('All-Incidents');
  });