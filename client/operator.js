Template.operator.events({

	'submit .form-horizontal':function(event,template){
		//prevent form from firing by default
		event.preventDefault();
		event.stopPropagation();

		//getting input fields
		var hp = template.find("#hp").value;
		var type = template.find('#type').value;
		var comment = template.find('#comment').value;
		var location = Session.get("CurMarker");
		var now = new moment();	//timestamp value for reported time

		//Creates incident object
		var incident = { 
			'reportedTime':now._d,
			'contact':hp,
			'type':type,
			'comment':comment,
			'location':location,
			'resolved':false,
			'verified':false
		}

		//Server-side call for security 
		//Passes Incident Object to Server for DB insertion
		//Refer to methods.js for server-side insertion code. 
		Meteor.call("insertIncident",incident);
		console.log("Report submitted");
		hp.value = "";
		comment.value = "";
		return false; 

	}

});