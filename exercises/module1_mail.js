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

// HTML body
function sendTestEmail() {
  var recipient = 'angch@tertiaryinfotech.com';
  var guestName = 'Ally';
  var senderName = 'Alfred';
  var subject = 'Test Email';
  var htmlbody = '<p> Hi,<br/> This is a test email</p>';

  MailApp.sendEmail({
    to: recipient,
    subject: subject,
    htmlBody: htmlbody    
  });
}

// Exercise: Modify thhe Script
function sendTestEmail() {
  var recipient = 'angch@tertiaryinfotech.com';
  var guestName = 'Ally';
  var senderName = 'Alfred';
  var subject = 'Test Email';
  var htmlbody = '<p>Hi ' + guestName +'</p>' 
      +'<p>This is a greeting from ' + senderName + '</p>';

  MailApp.sendEmail({
    to: recipient,
    subject: subject,
    htmlBody: htmlbody    
  });
}
