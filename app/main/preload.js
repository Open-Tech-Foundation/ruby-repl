const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  on(eventName, callback) {
    ipcRenderer.on(eventName, callback);
  },

  async invoke(eventName, ...params) {
    return await ipcRenderer.invoke(eventName, ...params);
  },
});
