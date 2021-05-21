const { ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');

const getUserFilesDir = require('./getUserFilesDir');

ipcMain.handle('get-ruby-version', async () => {
  const { spawn } = require('child_process');
  const subprocess = spawn('ruby', ['-v']);

  return new Promise((resolve) => {
  subprocess.stdout.on('data', (data) => {
      resolve(data.toString());
  });

  subprocess.stderr.on('data', () => {
      resolve('No ruby found');
    });
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
