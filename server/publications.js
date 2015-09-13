


Meteor.publish('All-Incidents',function(){
	console.log("Publishing incidents");
	return Incidents.find();
});

Meteor.publish('All-Haze',function(){
	console.log("Publishing haze");
	return PSI.find({},{$sort:{natural:-1}},{limit:12});
});


