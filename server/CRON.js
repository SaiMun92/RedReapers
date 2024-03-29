/**
* Server side methods for farming haze data (Using NEA's Weather API)
* Cron jobs will autopopulate local collection with haze data
* Alternatively, we could just make an API call whenever we need haze data,
* but collecting them would be better because API calls do not allow calls into the past.
* @Author - Tay Yi 
*/


//Adds an hourly cron job of collecting hourly PSI-levels
SyncedCron.add({
  name: 'Collecting hourly PSI-levels from NEA-API',
  schedule: function(parser) {
    // parser is a later.parse object
    return parser.text('every 1 hours');
  },
  job: function() {
    crawlPSI();
  }
});


//Adds a 5 min interval cron job of collecting hourly PSI-levels
SyncedCron.add({
  name: 'Collecting traffic incident data from LTA (5 min Intervals)',
  schedule: function(parser) {
    // parser is a later.parse object
    return parser.text('every 15 minutes');
  },
  job: function() {
    Meteor.call('getTrafficIncidents');
  }
});


SyncedCron.start();