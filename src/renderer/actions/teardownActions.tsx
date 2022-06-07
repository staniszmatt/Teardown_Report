// import fs from 'fs';
import { useDispatch } from 'react-redux';

export interface TeardownActionProps {
  type: string;
  resp?: string | Record<string, unknown>;
}

export const setGetVersion = (resp: string) => ({
  type: 'GET_VERSION',
  resp,
});

export const setIIRData = (resp: {}) => ({
  type: 'GET_IIR_WORK_ORDER_DATA',
  resp,
});

export const teardownFilters = {
  GET_VERSION: 'GET_VERSION',
  GET_IIR_WORK_ORDER_DATA: 'GET_IIR_WORK_ORDER_DATA',
};

// Action Functions
export function searchForIIRData(formData: {}) {
  console.log('searchForIIRData called: formData: ', formData);


  // Async Function call to IPC Main
  window.electron.ipcRenderer.once('get_iir_data', (arg) => {
    // const dispatch = useDispatch();
    console.log('IIR Data Request Response: ', arg);
    const { data } = arg;
    setIIRData(data);
    // dispatch(setIIRData(data));
    return (dispatch) => {
      dispatch(setIIRData(data));
    };
  });
  window.electron.ipcRenderer.requestIIRData(formData);
}
