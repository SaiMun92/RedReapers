/* This file is not committed to Git */


Meteor.startup(function() {

  console.log("Initialising Service Configurations..");
    /*
     ServiceConfiguration.configurations.remove({
    service: "facebook"
  });
     ServiceConfiguration.configurations.remove({
    service: "twitter"
  });*/
   
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
      { "service": "twitter" },
      {
        $set: {
          "clientId": "GycurSZS2qBT95bzd2XekvK3E",
          "secret": "86AN3qvjMwyGjTPuZIHCBq1rv9iPesDgnPXQQzBbCVBbnOCOsR"
        }
      },
      { upsert: true }
    );



});