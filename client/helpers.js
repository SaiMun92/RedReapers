UI.registerHelper('timeNow', function(datetime) {
    Session.get('time');
    return moment(datetime);
});

setInterval(function() {
    Session.set("time", new Date())
}, 1000); //Every second. Okay this is fancy, but not sure if computationally wasteful LOL

UI.registerHelper('CurMarker', function(option){
	return Session.get("CurMarker")[option];
});

//Universal Session Template Helper
UI.registerHelper("GetSession",function(key){
	return Session.get(key);
});

//Helper to return correct colour for incident panel
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
		console.log(color);
		return color;}
	else{
		return 'default';
	}
});

UI.registerHelper('equals', function (a, b) {
  return a === b;
});