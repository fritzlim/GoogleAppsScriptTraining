function myFunction() {
 
  var doc = DocumentApp.create('My New Docuemnt');
  
  
}


function myFunction() {

   var doc = DocumentApp.openById('1_-mlMffKR6YRBicjOfNu8PfrU-Ks4fjpJEim2IZGx68');
  var body = doc.getBody();
  var para1 = body.getChild(0);
  para1.appendText('New Paragraph');
  
  
}

function myFunction() {
 
  var ss = SpreadsheetApp.create("My New Spreadheet") 
  
}

function myFunction() {

   var ss = SpreadsheetApp.openById('1KxZNe7AyVtGtUIE9NWqdqTVT7NCdCDC7-S8fjOZ3S9I');
  var activeSheet = ss.getActiveSheet();
  var targetCell = activeSheet.setActiveSelection("B2");
  targetCell.setValue("hello");
  
}
