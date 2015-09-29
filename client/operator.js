Template.operator.events({

	'submit .form-horizontal':function(event,template){
		//prevent form from firing by default
		event.preventDefault();
		event.stopPropagation();

		//getting input fields
		var hp = template.find("#hp");
		var type = template.find('#type');
		var comment = template.find('#comment');
		var location = Session.get("CurMarker");
		var now = new moment();	//timestamp value for reported time

		//Creates incident object
		var incident = { 
			'reportedTime':now._d,
			'contact':hp.value,
			'type':type.value,
			'comment':comment.value,
			'location':location,
			'status':'pending',
			'reportedBy':Meteor.userId()
		}

		//Server-side call for security 
		//Passes Incident Object to Server for DB insertion
		//Refer to methods.js for server-side insertion code. 
		Meteor.call("insertIncident",incident);
		sweetAlert("Report Submitted");
		hp.value = "";
		comment.value = "";
		Router.go('/');
		return false; 

	}

});