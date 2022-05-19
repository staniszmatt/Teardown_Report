/* eslint-disable @typescript-eslint/no-explicit-any */
import { VisibilityFilters } from '../actions';

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action: any) => {
  console.log('reducer filter action: ', action);
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
