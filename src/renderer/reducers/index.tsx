import { combineReducers } from '@reduxjs/toolkit';
import todos from './todos';
import visibilityFilters from './visibilityFilter';
import modalFilter from './modalFilter';
import teardownFilter from './teardownFilter';

export default combineReducers({
  todos,
  modalFilter,
  visibilityFilters,
  teardownFilter,
});
