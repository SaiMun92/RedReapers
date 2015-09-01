Template.operator.events({

	'submit .form-horizontal':function(event,template){
		event.preventDefault();
		event.stopPropagation();
		console.log("Report submitted");
		var hp = template.find("#hp").value;
		var type = template.find('#type').value;
		var comment = template.find('#comment').value;
		var location = Session.get("CurMarker");
		var incident = {
			'contact':hp,
			'type':type,
			'comment':comment,
			'location':location
		}
		Meteor.call("insertIncident",incident);
		return false; 

	}

});