/**
* Configures SMTP for sending emails
* @Author - Tay Yi 
*/
Meteor.startup(function () {
  smtp = {
    username: 'redreapers3003@gmail.com',   
    password: 'redreaper',   
    server:   'smtp.gmail.com',  
    port: 25
  }
  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
});