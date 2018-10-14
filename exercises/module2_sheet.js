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
  var sheet = SpreadsheetApp.getActiveSheet();
  var range = sheet.getRange(2,2,2);
  var values = range.getValues();
  Logger.log(values);
  Logger.log(values[0][0]);
  Logger.log(values[1][0]);
  }  

function changeNRIC() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var column = sheet.getRange(2,2,20);
  var values = column.getValues();
  var numRows = column.getNumRows();
  for (var i = 0; i < numRows; i++) {
    if (values[i][0].length > 5) {
      values[i][0] = values[i][0].substring(5,9);
    }
  }
  column.setValues(values);
}

function calSum() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var cell = sheet.getRange("B4");
  cell.setFormulaR1C1("=SUM(R[-2]C[0]:R[-1]C[0])");
  } 





