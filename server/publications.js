Houston.add_collection(Meteor.users);


Meteor.publish('All-Incidents',function(){
	console.log("Publishing incidents");
	return Incidents.find();
});

Meteor.publish('All-Haze',function(){
	console.log("Publishing haze");
	return PSI.find({},{$sort:{natural:-1}},{limit:12});
});


Meteor.publish("userData", function () {
  if (this.userId) {
    return Meteor.users.find({_id: this.userId},
                             {fields: {'services': 1, 'others': 1}});
  } else {
    this.ready();
  }
});
