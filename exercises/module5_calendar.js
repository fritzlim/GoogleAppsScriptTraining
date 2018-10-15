// Module 5 Google Calendar Script
// Author: Dr. Alfred Ang

// Create a Simple Event
function createEvent() {
  var event = CalendarApp.getOwnedCalendarById('angchewhoe@gmail.com').createAllDayEvent('Google Apps Script Class',
    new Date('October 16, 2018'),
    new Date('October 17, 2018'),
    {location: 'Bukit Timah', 
     sendInvites: true});
}

// Add Guest Email
function createEvent() {
  var event = CalendarApp.getOwnedCalendarById('angchewhoe@gmail.com').createAllDayEvent('Google Apps Script Class',
    new Date('October 16, 2018'),
    new Date('October 17, 2018'),
    {location: 'Bukit Timah', 
     sendInvites: true});
  event.addGuest('angch@tertiaryinfotech.com')
}

// Recurrence event
function createEventSeries() {
 var calendar = CalendarApp.getOwnedCalendarById('angchewhoe@gmail.com');
 var event = calendar.createEventSeries(
   'Weekly Swimming Lession',
   new Date('October 22, 2018 10:00:00 UTC+8'),
   new Date('October 22, 2018 12:00:00 UTC+8'),
   CalendarApp.newRecurrence().addWeeklyRule().times(10));
 }

// Ex: Creat a recurrence event
function createEvent() {
  var recurrence = CalendarApp.newRecurrence().addWeeklyRule().times(10);
  var event = CalendarApp.getOwnedCalendarById('angchewhoe@gmail.com').createAllDayEventSeries('Adv Google Apps Script Class',
    new Date('October 17, 2018'),
    recurrence,
    {location: 'Bukit Timah', 
     sendInvites: true});

}





