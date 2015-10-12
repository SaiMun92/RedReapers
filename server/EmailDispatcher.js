/** Contains a collection of methods for email generation
@Author - Tay Yi 
 */

Meteor.methods({

  sendSingleEmail: function (to, incident) {
    check([to, from], [String]);
    this.unblock();	//Run async
    //Extract incident report details 
    var email = composeIncidentEmail(incident);
    email['to'] = to;
    //actual email sending method
    Email.send(email);
    console.log("Email sent out from server");
  },

   sendMultipleEmail: function (incident) {

   	mailTargets = Subscribers.find().fetch();
    this.unblock();	//Run Async
    var email = composeIncidentEmail(incident);
    _.each(mailTargets,function(mailTarget){
    	email['to'] = mailTarget['email'];
    	console.log(mailTarget['email'])
    	Email.send(email);
    	console.log("Email fired!");
    });
},

});

/** Report a single incident to stakeholders and subscribers */
composeIncidentEmail = function(incident){

	var subject = "CMS Auto-report:" + incident['type'];
	var text = 'Dear Sir/Mdm, \n' + 
				'We would like to bring your attention to the following incident \n'+
				"Incident Type: " + incident['type'] + "\n" + 
				"Details (as reported): " + incident['comment'] + "\n" + 
				"Location: " + incident['location']['lat'] + "," + incident['location']['lng'] + "\n" + 
				"Not sure why you would need to know this, but you know, sometimes it's good to know that shit are happening to other people right? \n" +
				"Best regards, \n" +
				"Red Reapers Team";
	var email = {
		'subject':subject,
		'text':text,
		'from':'redreapers3003@gmail.com'
	}
	return email;
}