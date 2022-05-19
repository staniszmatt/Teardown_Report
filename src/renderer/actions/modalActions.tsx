export const toggleModalState = () => ({
  type: 'TOGGLE_MODAL_STATE',
});

export const toggleErrorModalState = (resp: Record<string, unknown>) => ({
  type: 'TOGGLE_ERROR_MODAL_STATE',
  resp,
});

export const toggleSuccessModalState = (resp: string) => ({
  type: 'TOGGLE_SUCCESS_MODAL_STATE',
  resp,
});

export const toggleWarningModalState = (resp: Record<string, unknown>) => ({
  type: 'TOGGLE_WARNING_MODAL_STATE',
  resp,
});

export const modalFilters = {
  TOGGLE_ERROR_MODAL_STATE: 'TOGGLE_ERROR_MODAL_STATE',
  TOGGLE_SUCCESS_MODAL_STATE: 'TOGGLE_SUCCESS_MODAL_STATE',
  TOGGLE_MODAL_STATE: 'TOGGLE_MODAL_STATE',
  TOGGLE_WARNING_MODAL_STATE: 'TOGGLE_WARNING_MODAL_STATE',
};
