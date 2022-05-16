import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilters from './visibilityFilter';

export default combineReducers({
  todos,
  visibilityFilters,
});
