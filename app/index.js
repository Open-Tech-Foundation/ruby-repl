const { app, BrowserWindow, Menu, ipcMain } = require('electron');

Menu.setApplicationMenu(null);

function createWindow() {
  const win = new BrowserWindow({
    width: 1366,
    height: 784,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
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
