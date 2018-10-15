// Module 7 Trigger
// Author: Dr. Alfred Ang

function sendEmail() {
  var recipient = 'angch@tertiaryinfotech.com';
  var subject = 'testing';
  var body = 'this is a test message'; 
  MailApp.sendEmail(recipient, subject, body); 
  

// Exercise: Auto Thank you email
function createEvent() {
 var calendar = CalendarApp.getOwnedCalendarById('angchewhoe@gmail.com');
 var event = calendar.createAllDayEvent('Advanced Excel Course', new Date('October 23, 2018'),{
   location:'Bukit Timah',
   guests: 'abc@test.com, efg@test.com'
 });  
 
 var recipient = 'angch@tertiaryinfotech.com';
 var subject = 'Event Created';
 var body = 'Your event has created';
 
 MailApp.sendEmail(recipient, subject, body);
}
