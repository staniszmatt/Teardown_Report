import { combineReducers } from '@reduxjs/toolkit';
import todos from './todos';
import visibilityFilters from './visibilityFilter';
import modalFilter from './modalFilter';

export default combineReducers({
  todos,
  modalFilter,
  visibilityFilters,
});
