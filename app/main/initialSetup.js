const fs = require('fs');
const getUserFilesDir = require('./getUserFilesDir');

function initialSetup() {
  const userFilesDir = getUserFilesDir();
  if (!fs.existsSync(userFilesDir)) {
    fs.mkdirSync(userFilesDir);
  }
}

module.exports = initialSetup;
