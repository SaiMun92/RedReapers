Template.report.onRendered(function(){

	console.log("Report document");
	var loggedInUser = Meteor.user();
	 if (Roles.userIsInRole(loggedInUser, ['admin','operator'])) {
			console.log("Operator redirect");
			Router.go('/operator');
	    }

});