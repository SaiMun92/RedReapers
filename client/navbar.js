Template.navbar.events({

	'click #logout':function(){
		console.log("Logout invoked");
		AccountsTemplates.logout();
	}


});