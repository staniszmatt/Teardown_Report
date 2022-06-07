// import { bindActionCreators, Dispatch } from 'redux';
import { connect, useDispatch } from 'react-redux';
import icon from '../../../assets/icons/logo.png';
import { setIIRData } from '../actions/teardownActions';
import Footer from '../components/Footer';
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleToDoList';

function mapStateToProps(state: any) {
  return {
    teardown: state,
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators({ setIIRData }, dispatch);
}

function TearDownApp(props: any) {
  // const dispatch = useDispatch();
  return () => {
    // Async Function call to IPC Main
    window.electron.ipcRenderer.once('get_iir_data', (arg) => {
      // const dispatch = useDispatch();
      console.log('IIR Data Request Response: ', arg);
      const { data } = arg;
      dispatch(setIIRData(data));
    });
    window.electron.ipcRenderer.requestIIRData(props);
  };
}

export default connect(mapStateToProps)(TearDownApp);
