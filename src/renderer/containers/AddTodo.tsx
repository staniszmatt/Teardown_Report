/* eslint-disable no-return-assign */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import {
  toggleWarningModalState,
  toggleModalState,
} from '../actions/modalActions';

const AddTodo = ({ dispatch }: any) => {
  let input: any;

  // Test Warning Modal
  const warningModalResp = {
    warningMsg: 'Warning Test',
    btnLbl: 'Button Close',
    actionFunction: () => {
      dispatch(toggleModalState());
    },
    closeModal: () => {
      dispatch(toggleModalState());
    },
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          dispatch(toggleWarningModalState(warningModalResp));
          input.value = '';
        }}
      >
        <input ref={(node) => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);
