import { combineReducers } from '@reduxjs/toolkit';
import { reducer as fromReducer } from 'redux-form';
import todos from './todos';
import visibilityFilters from './visibilityFilter';
import modalFilter from './modalFilter';
import teardownFilter from './teardownFilter';

export default combineReducers({
  todos,
  modalFilter,
  form: fromReducer,
  visibilityFilters,
  teardownFilter,
});
