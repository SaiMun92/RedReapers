Template.claimrole.events({

	'click #claimbutton':function(event,template){
		var password = template.find('#password').value;

		//Should generate role based on password dictionary
		//Not implemented, don't really intend to. 
		if (password=='tayyirocks'){
			user = Meteor.user();
			Meteor.call("SetRoles",user);
			console.log("Role claimed");
			sweetAlert("You have been designated as Operator! Have fun!");
			Router.go('operator');
		}
		else{
			sweetAlert("Wrong password! Try again please!");
		}
	

	}


});