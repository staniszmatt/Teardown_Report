/* eslint-disable @typescript-eslint/no-explicit-any */
import PropTypes from 'prop-types';
import Todo from './ToDo';

const TodoList = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map((todo: any) => (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired,
};

export default TodoList;
