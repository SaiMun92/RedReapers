

Template.navbar.events({




	'click #logout':function(){
		console.log("Logout invoked");
		AccountsTemplates.logout();
		},

	'click #showPSI':function(){
		var psiView = Session.get('psiView');
		Session.set("psiView",!psiView);
	}


});


