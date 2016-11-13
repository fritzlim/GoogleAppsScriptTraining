function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index');
}

<!DOCTYPE html>
<html>
  <head>
    <base target="_top">
  </head>
  <body>
    Hello, World!
  </body>
</html>

function doGet(e) {
  var output = SpreadsheetApp.openById("1xkrCNroBC9hguqqLvaSjFGiMVmDhCtI8Rg0qwxbIBJw/")
  .getDataRange().getValues().toString();
  var html = HtmlService.createHtmlOutput("<h1>Hello from my script</h1>"+output);
  return html;
  
}
