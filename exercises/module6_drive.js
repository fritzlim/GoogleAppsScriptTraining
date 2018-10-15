// Module 5 Google Drive Script
// Author: Dr. Alfred Ang


// Create Folder and File
function writeFile() {
  var folder = DriveApp.createFolder('TestFolder');
  folder.createFile('TestFile2', 'Hello, World 2!');
  
}