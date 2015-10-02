/** Global Helpers for entire client-side application */


/** @Helper Renders time to template*/
UI.registerHelper('timeNow', function(datetime) {
    Session.get('time');
    return moment(datetime);
});

/** @Helper Marker Session variable */
UI.registerHelper('CurMarker', function(option){
	return Session.get("CurMarker")[option];
});

/** @Helper returns Session var given key */
UI.registerHelper("GetSession",function(key){
	return Session.get(key);
});

/** @Helper returns bootstrap div class based on status */
UI.registerHelper("incidentStatusColor",function(status){
	console.log(status);
	var incidentStatusDict = {
		'resolved':'success',
		'verified':'warning',
		'pending':'default',
		'urgent':'primary'
	};
	var color = incidentStatusDict[status];
	if (color){
		return color;
	}
	else{
		return 'default';
	}
});

/** @Helper Template equality check */
UI.registerHelper('equals', function (a, b) {
  return a === b;
});

/** @Helper Returns Meteor user's email */
UI.registerHelper('MeteorUserEmail',function(){
	var user = Meteor.user();
	if (user.emails[0].address){
		return user.emails[0].address;
	}
	else
		return false;

});

UI.registerHelper('ListLength',function(List){

	if (List.length){
		return List.length
	}
	else{
			return 0;
		}
});
