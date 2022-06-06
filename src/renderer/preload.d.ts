declare global {
  interface Window {
    electron: {
      ipcRenderer: {
        myPing(): void;
        getVersion(): void;
        requestIIRData(formData: {}): void;
        on(
          channel: string,
          func: (...args: unknown[]) => void
        ): (() => void) | undefined;
        once(channel: string, func: (...args: unknown[]) => void): void;
      };
    };
  }
}

export {};
