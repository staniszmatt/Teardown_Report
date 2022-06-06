/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/destructuring-assignment */
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import ReactModal from 'react-modal';
import { toggleModalState } from '../actions/modalActions';
// import { modalStateType } from '../../reducers/types';
// import ErrorModal from '../components/modals/ErrorModal';
// import SuccessModal from '../components/modals/SuccessModal';
import WarningModal from '../components/modals/WarningModal';
import ModalBtn from '../components/generalButton/ButtonClickHandler';
import { ModalStateProps } from '../reducers/modalFilter';
import '../components/modals/Modal.css';

interface Props {
  toggleModalState: () => Record<string, unknown>;
  modals: {
    modalFilter: ModalStateProps;
  };
}

function mapStateToProps(state: any) {
  return {
    modals: state,
  };
}

function mapDispatchToProps(dispatch: Dispatch<any>) {
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
  const {
    modals: {
      modalFilter: {
        modalState,
        // errorModalState,
        // successModalState,
        warningModalState,
        modalMessage,
      },
    },
  } = props;

  // TODO: Fix the way string props is passed or how to fix typescript rules.
  return (
    <div>
      {modalState && (
        <ReactModal
          isOpen={modalState}
          onRequestClose={toggleModalState}
          contentLabel="MODAL"
          ariaHideApp={false}
          className="modal-container"
        >
          {/* {errorModalState && <ErrorModal props={modalMessage} />}
          {successModalState && <SuccessModal props={modalMessage} />} */}
          {warningModalState && <WarningModal props={modalMessage} />}

          {!warningModalState && (
            <div>
              <ModalBtn buttonName="CLOSE" ClickHandler={toggleModalState} />
            </div>
          )}
          {warningModalState && (
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
