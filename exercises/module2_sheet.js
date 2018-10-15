// Module 2 Google Sheet Script
// Author: Dr. Alfred Ang


// Get value from a cell
function getValue() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var range = sheet.getRange(2, 2);
  var values = range.getValues();
  Logger.log(values[0][0]);
  }

// Exercise get Values 
function getValue() {
  var sheet = SpreadsheetApp.openByUrl('https://...');
  var range = sheet.getRange('B2:B3');
  var value = range.getValues();
  Logger.log(value);
  Logger.log(value[0][0]);
  Logger.log(value[1][0]);
                                       
}

function changeNRIC() {
  var sheet = SpreadsheetApp.openByUrl('https://...');
  var range = sheet.getRange('B2:B3');
  var values = range.getValues();
  var numRows = range.getNumRows();
  for (var i=0;i<numRows;i++) {
    if (values[i][0].length>5) {
      values[i][0] = values[i][0].substring(5,9);
    }
  }
  range.setValues(values);                                  
}

function calSum() {
  var sheet = SpreadsheetApp.openByUrl('https//....');
  var cell = sheet.getRange("D4");
  var cell2 = sheet.getRange("D5");
  cell.setFormula("=SUM(D2:D3)");
  cell2.setFormulaR1C1("=AVERAGE(R[-3]C[0]:R[-2]C[0])");
  } 





