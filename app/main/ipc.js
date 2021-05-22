const { ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');

const getUserFilesDir = require('./getUserFilesDir');

const userFilesDir = getUserFilesDir();

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

ipcMain.handle('load-file', async (event, filename) => {
  const filePath = path.join(userFilesDir, filename);
  return new Promise((resolve) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      resolve(data);
    });
  });
});

ipcMain.handle('save-file', async (event, filename, content) => {
  console.log('Saving file: ', filename);
  const filePath = path.join(userFilesDir, filename);
  return new Promise((resolve) => {
    fs.writeFile(filePath, content, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      resolve();
    });
  });
});

ipcMain.handle('run-file', async () => {
  const mainFilePath = path.join(userFilesDir, 'main.rb');
  const { spawn } = require('child_process');
  const subprocess = spawn('ruby', [mainFilePath]);

  return new Promise((resolve) => {
    subprocess.stdout.on('data', (data) => {
      resolve(data.toString());
    });

    subprocess.stderr.on('data', (error) => {
      resolve(error.toString());
    });
  });
});
