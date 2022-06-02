import { teardownFilters } from '../actions/teardownActions';

export interface TeardownAction {
  type: string;
  reps?: string;
}

const IState = {
  appVersion: '',
};

export default function teardown(state = IState, action: TeardownAction) {
  console.log('teardown reducer state change called', action);
  switch (action.type) {
    case teardownFilters.GET_VERSION:
      return {
        ...state,
        appVersion: action.reps,
      };
    default:
      return state;
  }
}
