// import { bindActionCreators, Dispatch } from 'redux';
import { connect, useDispatch } from 'react-redux';
import icon from '../../../assets/icons/logo.png';
import { setGetVersion } from '../actions/teardownActions';
import Footer from '../components/Footer';
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleToDoList';

// Example setup for props when ready
// interface Props {
//   toggleModalState: () => Record<string, unknown>;
//   modals: {
//     modalFilter: {
//       modalState: boolean;
//       errorModalState: boolean;
//       successModalState: boolean;
//       warningModalState: boolean;
//       modalMessage: any;
//     };
//   };
// }

function mapStateToProps(state: any) {
  return {
    teardown: state,
  };
}

// function mapDispatchToProps(dispatch: Dispatch) {
//   return bindActionCreators({ setGetVersion }, dispatch);
// }

function TearDownApp(props: any) {
  const dispatch = useDispatch();

  if (props.teardown.teardownFilter.appVersion === '') {
    window.electron.ipcRenderer.once('app_version', (arg) => {
      console.log('Action IPC Resp: ', arg);
      // setTheVersion(arg);
      dispatch(setGetVersion(arg));
    });
    window.electron.ipcRenderer.getVersion();
  }
  console.log('teardown props: ', props);

  return (
    <div className="container">
      <p>{`App Version: ${props.teardown.teardownFilter.appVersion}`}</p>
      <div className="backgroundImage">
        <img width="200px" alt="icon" src={icon} />
      </div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
}

export default connect(mapStateToProps)(TearDownApp);
