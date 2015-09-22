Template.claimrole.events({

	'click #claimbutton':function(event,template){
		var password = template.find('#password').value;

		//Should generate role based on password dictionary
		//Not implemented, don't really intend to. 
		user = Meteor.user();
		Meteor.call("SetRoles",user);
		console.log("Role claimed");



	}


});