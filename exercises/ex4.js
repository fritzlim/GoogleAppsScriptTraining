// Module 4
// Add a custom menu to the spreadsheet.
function onOpen() {
  SpreadsheetApp.getUi() 
      .createMenu('Custom Menu')
      .addItem('Add Row', 'myFunction')
      .addItem('Show Alert', 'showAlert')
      .addItem('Show Alert 2', 'showAlert2')
      .addItem('Show Alert 3', 'showAlert3')
      .addItem('Show Prompt', 'showPrompt')
      .addItem('Show dialog', 'showDialog')
      .addToUi();
}

//Exercise - OnOpen
function onOpen() {
  SpreadsheetApp.getUi() 
      .createMenu('Custom Menu')
      .addItem('Add Row', 'myFunction')
      .addToUi();
}

// Set a comment on the edited cell to indicate when it was changed.
function onEdit(e){
  var range = e.range;
  range.setNote('Last modified: ' + new Date());
}

//Time Driven Trigger
function myFunction() {
  var nextRow = SpreadsheetApp.getActiveSheet().getDataRange().getLastRow()+1;
  var theDate = Utilities.formatDate(new Date(), "GMT", "HH:mm yyyy-mm-dd");
  SpreadsheetApp.getActiveSheet().setActiveSelection("A"+nextRow).setValue("Row "+ nextRow +" at " + theDate);
  
}

//Alert Dialog
function showAlert() {
  var ui = SpreadsheetApp.getUi();
  ui.alert("Alert!");
}

function showAlert2() {
  var ui = SpreadsheetApp.getUi(); 
  var result = ui.alert(
     'Please confirm',
     'Are you sure you want to continue?',
      ui.ButtonSet.YES_NO);
}

function showAlert3() {
  var ui = SpreadsheetApp.getUi(); 

  var result = ui.alert(
     'Please confirm',
     'Are you sure you want to continue?',
      ui.ButtonSet.YES_NO);

  // Process the user's response.
  if (result == ui.Button.YES) {
    // User clicked "Yes".
    ui.alert('Confirmation received.');
  } else {
    // User clicked "No" or X in the title bar.
    ui.alert('Permission denied.');
  }
}

function showPrompt() {
  var ui = SpreadsheetApp.getUi(); // Same variations.

  var result = ui.prompt(
      'Let\'s get to know each other!',
      'Please enter your name:',
      ui.ButtonSet.OK_CANCEL);

  // Process the user's response.
  var button = result.getSelectedButton();
  var text = result.getResponseText();
  if (button == ui.Button.OK) {
    // User clicked "OK".
    ui.alert('Your name is ' + text + '.');
  } else if (button == ui.Button.CANCEL) {
    // User clicked "Cancel".
    ui.alert('I didn\'t get your name.');
  } else if (button == ui.Button.CLOSE) {
    // User clicked X in the title bar.
    ui.alert('You closed the dialog.');
  }
}

function showDialog() {
  var html = HtmlService.createHtmlOutputFromFile('Page')
      .setWidth(400)
      .setHeight(300);
  SpreadsheetApp.getUi() 
      .showModalDialog(html, 'My custom dialog');
}

<script>
function doSomething() {
    google.script.run.myFunction();
}
</script>

<div>
<p>Hello World!</p>
<input type="button" onclick="doSomething()" value="do something" />
</div>
