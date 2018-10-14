// Module 5 Trigger
// Author: Dr. Alfred Ang

function sendEmail() {
  var recipient = 'angch@tertiaryinfotech.com';
  var subject = 'testing';
  var body = 'this is a test message'; 
  MailApp.sendEmail(recipient, subject, body); 
  

// Exercise: Auto Thank you email
function sendEmails() 
{
  var today = new Date(); //creates a var named today and stores today's date into it. Blank gives today's date by default
  var events = CalendarApp.getOwnedCalendarById('angchewohe@gmail.com').getEventsForDay(today); //change to your calendar ID
  for (var i = 0; i < events.length; i++){    //for each calendar event, fetch event name
  var courseName = events[i].getTitle(); 
  var guestList = events[i].getGuestList(); 
  var emailAddress = 'angch@tertiaryinfotech.com';
  for (var a = 0; a < guestList.length; a++){ //for each invitee in referenced event, send email
    emailAddress = emailAddress + "," + guestList[a].getEmail(); //gets email from respective guest ID 
  }
  var subject = "Thank you for participating " + courseName; 
  var template = 
    '<body>'
    +'<p>Dear participants,</p>'
    +'<p>Thank you for participating ' + courseName + ' at Tertiary Courses.</p>'
    +'</body>'; 
  MailApp.sendEmail(emailAddress, subject, '', //the function that sends the email to each guest. placeholder email msg '' is needed for syntax.
                      {name: 'SG, Tertiary Courses', //displayed sender name
                       htmlBody: template});
    }
 }