import './Modal.css';
import ModalBtn from '../generalButton/ButtonClickHandler';

interface WarnModalProps {
  props: {
    warningMsg: string;
    btnLbl: string;
    actionFunction: () => Record<string, unknown>;
    closeModal: () => Record<string, unknown>;
  };
}

export default function WarningModal(warnModalProps: WarnModalProps) {
  const {
    props: { warningMsg, btnLbl, actionFunction, closeModal },
  } = warnModalProps;

  const handleBtn = () => {
    actionFunction();
    closeModal();
  };

  return (
    <div className="warning-modal-container">
      <div className="blink_me">
        <p>WARNING!</p>
      </div>
      <div>
        <p>{warningMsg}</p>
      </div>
      <div>
        <ModalBtn buttonName={btnLbl} ClickHandler={handleBtn} />
      </div>
    </div>
  );
}
