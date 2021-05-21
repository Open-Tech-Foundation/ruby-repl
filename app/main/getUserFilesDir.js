const { app } = require('electron');
const path = require('path');

function getUserFilesDir() {
  const userDataPath = app.getPath('userData');
  return path.join(userDataPath, 'files');
}

module.exports = getUserFilesDir;
