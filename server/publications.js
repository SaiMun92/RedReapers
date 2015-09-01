Meteor.publish('All-Incidents',function(){
	return Incidents.find();
});
