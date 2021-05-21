const { ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');

const getUserFilesDir = require('./getUserFilesDir');

ipcMain.on('get-ruby-version', (event) => {
  const { spawn } = require('child_process');

  const subprocess = spawn('ruby', ['-v']);

  subprocess.stdout.on('data', (data) => {
    event.reply('get-ruby-version-reply', data.toString());
  });

  subprocess.stderr.on('data', () => {
    event.reply('get-ruby-version-reply', 'No ruby found');
  });
});

ipcMain.on('load-file', (event, filename) => {
  const userFilesDir = getUserFilesDir();
  const filePath = path.join(userFilesDir, filename);
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    event.reply('load-file-reply', data);
  });
});
