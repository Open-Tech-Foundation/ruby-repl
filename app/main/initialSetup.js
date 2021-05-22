const fs = require('fs');
const path = require('path');

const getUserFilesDir = require('./getUserFilesDir');

function initialSetup() {
  const userFilesDir = getUserFilesDir();
  if (!fs.existsSync(userFilesDir)) {
    fs.mkdirSync(userFilesDir);
  }

  const mainFilePath = path.join(userFilesDir, 'main.rb');
  if (!fs.existsSync(mainFilePath)) {
    const content = "def msg\n  'I ❤️ Ruby'\nend\n\nputs msg";
    try {
      fs.writeFileSync(mainFilePath, content);
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = initialSetup;
