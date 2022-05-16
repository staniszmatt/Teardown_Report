import { combineReducers } from '@reduxjs/toolkit';
import todos from './todos';
import visibilityFilters from './visibilityFilter';

export default combineReducers({
  todos,
  visibilityFilters,
});
