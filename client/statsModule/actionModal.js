Template.actionModal.events({

	'click #sendemail':function(template,event){
		console.log("Sending email notificator to all subscribers");
		console.log(this);
		Meteor.call('sendMultipleEmail', this);
		console.log("Multiple Emails fired via client");



	}


});