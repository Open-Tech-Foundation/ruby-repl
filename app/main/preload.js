const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  getRubyVersion: async () => {
    return new Promise((resolve) => {
      ipcRenderer.on('get-ruby-version-reply', (event, version) => {
        resolve(version);
      });
      ipcRenderer.send('get-ruby-version');
    });
  },
  loadFile: async (filename) => {
    return new Promise((resolve) => {
      ipcRenderer.on('load-file-reply', (event, fileContent) => {
        resolve(fileContent);
      });
      ipcRenderer.send('load-file', filename);
    });
  },
});
