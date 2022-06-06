/* eslint-disable @typescript-eslint/no-explicit-any */
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { searchForIIRData } from '../actions/teardownActions';
import WorkOrderSearch from '../forms/WorkOrderSearch';

function mapStateToProps(state: any) {
  return {
    teardown: state,
  };
}

function mapDispatchToProps(dispatch: Dispatch<any>) {
  return bindActionCreators(
    {
      searchForIIRData,
    },
    dispatch
  );
}

function TearDownApp(props: any) {

  console.log('WorkOrderEditPage props: ', props);

  return (
    <div className="workOrderPageContainer">
      <div>
        <WorkOrderSearch onSubmit={searchForIIRData} />
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(TearDownApp);
