import {
  teardownFilters,
  TeardownActionProps,
} from '../actions/teardownActions';

const IState = {
  appVersion: '',
  workOrderInfo: {},
};

export default function teardown(state = IState, action: TeardownActionProps) {
  console.log('teardownFilter reducers called: action: ', action);
  console.log('teardownFilter reducers called: state: ', state);

  switch (action.type) {
    case teardownFilters.GET_VERSION:
      return {
        ...state,
        appVersion: action.resp,
      };
    case teardownFilters.GET_IIR_WORK_ORDER_DATA:
      return {
        ...state,
        workOrderInfo: action.resp,
      };
    default:
      return state;
  }
}
