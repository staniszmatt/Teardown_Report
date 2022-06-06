import { teardownFilters } from '../actions/teardownActions';

export interface TeardownAction {
  type: string;
  resp?: string;
}

const IState = {
  appVersion: '',
};

export default function teardown(state = IState, action: TeardownAction) {
  console.log('teardown reducer action: ', action);
  console.log('teardown reducer state: ', state);
  switch (action.type) {
    case teardownFilters.GET_VERSION:
      return {
        ...state,
        appVersion: action.resp,
      };
    default:
      return state;
  }
}
