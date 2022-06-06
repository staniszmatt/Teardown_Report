/* eslint-disable @typescript-eslint/no-explicit-any */
import { modalFilters, ModalAction } from '../actions/modalActions';

export interface ModalStateProps {
  modalState: boolean;
  errorModalState: boolean;
  successModalState: boolean;
  warningModalState: boolean;
  // modalMessage: any;
  modalMessage: {
    warningMsg: string;
    btnLbl: string;
    actionFunction: () => Record<string, unknown>;
    closeModal: () => Record<string, unknown>;
  };
}

const IState = {
  modalState: false,
  errorModalState: false,
  successModalState: false,
  warningModalState: false,
  modalMessage: {},
};

export default function modals(state = IState, action: ModalAction) {
  switch (action.type) {
    case modalFilters.TOGGLE_MODAL_STATE:
      return {
        ...state,
        modalState: false,
        errorModalState: false,
        successModalState: false,
        warningModalState: false,
        modalMessage: {},
      };
    case modalFilters.TOGGLE_ERROR_MODAL_STATE:
      return {
        ...state,
        modalState: true,
        errorModalState: true,
        modalMessage: action.resp,
      };
    case modalFilters.TOGGLE_SUCCESS_MODAL_STATE:
      return {
        ...state,
        modalState: true,
        successModalState: true,
        modalMessage: action.resp,
      };
    case modalFilters.TOGGLE_WARNING_MODAL_STATE:
      return {
        ...state,
        modalState: true,
        warningModalState: true,
        modalMessage: action.resp,
      };
    default:
      return state;
  }
}
