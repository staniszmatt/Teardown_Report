/* eslint-disable @typescript-eslint/no-explicit-any */
import { VisibilityFilters } from '../actions';

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action: any) => {
  console.log('reducers vis state', state);
  console.log('reducers vis action', action);

  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
