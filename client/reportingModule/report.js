Template.report.onRendered(function(){
	var loggedInUser = Meteor.user();
	 if (Roles.userIsInRole(loggedInUser, ['admin','operator'])) {
			console.log("Operator redirect");
			Router.go('/operator');
	    }

});

