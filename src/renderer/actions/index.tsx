/* eslint-disable @typescript-eslint/no-explicit-any */
let nextTodoId = 0;

export const addTodo = (text: any) => ({
  type: 'ADD_TODO',
  // eslint-disable-next-line no-plusplus
  id: nextTodoId++,
  text,
});

export const setVisibilityFilter = (filter: any) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
});

export const toggleTodo = (id: any) => ({
  type: 'TOGGLE_TODO',
  id,
});

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};
