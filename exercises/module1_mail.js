// Module 1 Get Started
// Author: Dr. Alfred Ang

function sendEmail() {
  var recipient = 'angch@tertiaryinfotech.com';
  var subject = 'testing';
  var body = 'this is a test message'; 
  MailApp.sendEmail(recipient, subject, body); 
  
}

// Modify thhe Script with option
// https://developers.google.com/apps-script/reference/mail/mail-app
function sendEmail() {
  var recipient = 'angch@tertiaryinfotech.com';
  var subject = 'testing';
  var body = 'this is a test message'; 
  MailApp.sendEmail({
    to: recipient,
    subject: subject,
    body: body
  }); 
  
}

// Exercise: Modify thhe Script
function sendEmail() {
  var recipient = 'angch@tertiaryinfotech.com';
  var name = 'Alfred'
  var subject = 'testing';
  var body = '<p>'+'this is a test message from '+ name +'</p>'; 
  MailApp.sendEmail({
    to: recipient,
    name: Alfred,
    subject: subject,
    htmlBody: body
  }); 
  
}
