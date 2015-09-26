  Meteor.startup(function() {
    GoogleMaps.load();
    Meteor.subscribe('All-Incidents');
    Meteor.subscribe("All-Haze");  
    Meteor.subscribe('userData');
  });

//Session Defaults
Session.setDefault("incidentview",false);
Session.setDefault("psiView",true);

Meteor.startup(function() {
    // Add Facebook configuration entry
    ServiceConfiguration.configurations.update(
      { "service": "facebook" },
      {
        $set: {
          "appId": "1721040091457547",
          "secret": "1b1d0bb00c3ba0af293182200cea51ab"
        }
      },
      { upsert: true }
    );

    // Add GitHub configuration entry
    ServiceConfiguration.configurations.update(
      { "service": "github" },
      {
        $set: {
          "clientId": "XXXXXXXXXXXXXXXXXXXX",
          "secret": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
        }
      },
      { upsert: true }
    );
});