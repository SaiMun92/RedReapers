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