Houston.add_collection(Meteor.users);


Meteor.publish('All-Incidents',function(){
	return Incidents.find();
});

Meteor.publish("PriorityIncidents",function(selector){
  var today = moment();
  var yesterday = today.add(-1,"days");
  //console.log(yesterday);
  if(selector){
     return Incidents.find(selector);
  }
  var priorityFilter = {'type':{$nin:['Road Work','Heavy Traffic','Vehicle Breakdown']}};
  var timeFilter = {'reportedTime':{ $gte : yesterday._d}};
  var combinedFilter = {$and:[priorityFilter,timeFilter]};
  return Incidents.find(combinedFilter);
});

Meteor.publish('All-Haze',function(){
	 var today = moment();
	 var yesterday = today.add(-1,"days");
   // Do not send all PSI data unless requested to! 
	return PSI.find({"timestamp" : { $gte : yesterday._d }});
});

Meteor.publish("userData", function () {
  if (this.userId) {
    return Meteor.users.find({_id: this.userId},
                             {fields: {'services': 1, 'others': 1}});
  } else {
    this.ready();
  }
});

