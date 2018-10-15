// Module 3 Google Doc Script
// Author: Dr. Alfred Ang


function changeText() {
  var doc = DocumentApp.openByUrl("https://docs.google.com/document/d/1-pvjzgzWVdXmT6zoBw7lwKBDsXAiDAMo4w-y8sk35MM/edit");
  var body = doc.getBody();
  var text = body.editAsText();
  text.insertText(0, 'Hello World.\n');
  text.appendText('\n Welcome to Google Apps Script.');
  body.replaceText("World", "Alfred");
}

// Add Text
// function appendText() {
//   var doc = DocumentApp.openByUrl("https://docs.google.com/document/d/1-pvjzgzWVdXmT6zoBw7lwKBDsXAiDAMo4w-y8sk35MM/edit");
//   var body = doc.getBody();
//   var text = body.editAsText();
//   text.insertText(0, 'Hello World.\n');
//   text.appendText('\n Welcome to Google Apps Script.');
//   body.replaceText("World", "Alfred");
  
//   var para1 = body.getChild(0);
//   para1.appendText(' Good Day to you.');
// }

// Replace Text
//function Washington() {
//  
//  var doc = DocumentApp.openByUrl('https://docs.google.com/document/d/1W-wufxxxyl5dydRFtGkjSH4z9DoJli_W1LHa7lKPkyc/edit');
//  var body = doc.getBody();
//  var text = body.editAsText();
//  text.replaceText('Washington', 'George Washington');    
//}
