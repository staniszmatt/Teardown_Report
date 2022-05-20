/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/destructuring-assignment */
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import ReactModal from 'react-modal';
import { toggleModalState, modalFilters } from '../actions/modalActions';
// import { modalStateType } from '../../reducers/types';
// import ErrorModal from './ErrorModal';
// import SuccessModal from './SuccessModal';
import WarningModal from '../components/modals/WarningModal';
import ModalBtn from '../components/generalButton/ButtonClickHandler';
import '../components/modals/Modal.css';

interface Props {
  toggleModalState: () => Record<string, unknown>;
  modals: {
    modalState: boolean;
    errorModalState: boolean;
    successModalState: boolean;
    warningModalState: boolean;
    modalMessage: any;
  };
}

// function mapStateToProps(state: modalStateType) {
function mapStateToProps(state: any) {
  console.log('map state modal: ', state);
  return {
    modals: state,
  };
}

function mapDispatchToProps(dispatch: Dispatch<any>) {
  console.log('dispatch modal ', dispatch);
  return bindActionCreators(
    {
      toggleModalState,
    },
    dispatch
  );
}

function AlarmModal(props: Props) {
  // toggleModalState is needed to be called here to gain proper access to the toggle state.
  // eslint-disable-next-line no-shadow
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const { toggleModalState } = props;

  console.log('modal page props: ', props);

  // TODO: Fix the way string props is passed or how to fix typescript rules.
  return (
    <div>
      {props.modals.modalState && (
        <ReactModal
          isOpen={props.modals.modalState}
          onRequestClose={toggleModalState}
          contentLabel="MODAL"
          ariaHideApp={false}
          className="modal-container"
        >
          {/* {props.modals.errorModalState && (
            <ErrorModal props={props.modals.modalMessage} />
          )}
          {props.modals.successModalState && (
            <SuccessModal props={props.modals.modalMessage} />
          )} */}
          {props.modals.warningModalState && (
            <WarningModal props={props.modals.modalMessage} />
          )}

          {!props.modals.warningModalState && (
            <div>
              <ModalBtn buttonName="CLOSE" ClickHandler={toggleModalState} />
            </div>
          )}
          {props.modals.warningModalState && (
            <div>
              <ModalBtn buttonName="CANCEL" ClickHandler={toggleModalState} />
            </div>
          )}
        </ReactModal>
      )}
    </div>
  );
}
// TODO: Need to figure out how to fix typescript rules or the interface setup.
export default connect(mapStateToProps, mapDispatchToProps)(AlarmModal);
