Template.subscribe.helpers({

	'UserEmail':function(){
		var user = Meteor.user();
		return user.emails[0].address;
	}


});

Template.subscribe.events({

	'click #subscribe':function(event,Template){
		//prevent form from firing by default
		event.preventDefault();
		event.stopPropagation();

		var email = Template.find('#email');
		var contact = Template.find('#contact');
		var user = Meteor.user();
		if(!user){
			user = "public"
		}
		var NewSubscriber = {
			'email':email.value,
			'contact':contact.value,
			'user':email.value
		}
		Meteor.call('insertSubscriber',NewSubscriber);
		sweetAlert("You have subscribed to our awesome incident reporting system!");
		email.value ="";
		contact.value="";



	}

})