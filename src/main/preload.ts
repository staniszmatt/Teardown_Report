import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';

contextBridge.exposeInMainWorld('electron', {
  // store: {
  //   get(val: any) {
  //     return ipcRenderer.sendSync('electron-store-get', val);
  //   },
  //   set(property: string, val: any) {
  //     ipcRenderer.send('electron-store-set', property, val);
  //   },
  // },
  ipcRenderer: {
    myPing() {
      ipcRenderer.send('ipc-example', 'ping');
    },
    on(channel: string, func: (...args: unknown[]) => void) {
      const validChannels = ['ipc-example', 'app_version'];
      console.log('ipc render channel: ', channel);

      if (validChannels.includes(channel)) {
        const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
          func(...args);
        // Deliberately strip event as it includes `sender`
        ipcRenderer.on(channel, subscription);

        return () => ipcRenderer.removeListener(channel, subscription);
      }

      return undefined;
    },
    once(channel: string, func: (...args: unknown[]) => void) {
      const validChannels = ['ipc-example', 'app_version'];
      console.log('once channel string: ', channel);
      if (validChannels.includes(channel)) {
        // Deliberately strip event as it includes `sender`
        ipcRenderer.once(channel, (_event, ...args) => func(...args));
      }
    },
    getVersion() {
      ipcRenderer.send('app_version');
    },
  },
});
