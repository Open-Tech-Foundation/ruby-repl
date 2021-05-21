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
});
