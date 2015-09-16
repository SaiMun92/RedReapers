Houston.add_collection(Meteor.users);


Meteor.publish('All-Incidents',function(){
	console.log("Publishing incidents");
	return Incidents.find();
});

Meteor.publish('All-Haze',function(){
	console.log("Publishing haze");
	 var today = moment();
	 var yesterday = today.add(-1,"days");
	 console.log(yesterday);
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
