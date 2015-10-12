Template.psiVIEW.helpers({

	'latestPSI':function(){
		var latestReading = PSI.find().fetch().reverse();
		return latestReading;

	},

});

Template.psiVIEW.events({

	'click #closePSI':function(){
		Session.set("psiView",false);
	}

});