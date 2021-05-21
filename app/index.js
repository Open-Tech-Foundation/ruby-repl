const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

const initialSetup = require('./main/initialSetup');
require('./main/ipc');

initialSetup();

Menu.setApplicationMenu(null);

function createWindow() {
  const win = new BrowserWindow({
    width: 1366,
    height: 784,
    webPreferences: {
      preload: path.join(__dirname, './main/preload.js'),
    },
  });
  win.loadURL('http://localhost:8080/');
  win.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
