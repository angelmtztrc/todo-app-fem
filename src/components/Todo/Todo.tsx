// styles
import './Todo.css';

// type
import { TodoType } from '../../App';

type TodoProps = {
  todos: Array<TodoType>;
  setTodos: Function;
  todo: TodoType;
};

const Todo = ({ todo, todos, setTodos }: TodoProps) => {
  // update the status of the todo
  const handleStatus = () => {
    setTodos([
      ...todos.map(item => {
        if (item.id === todo.id) {
          item.completed = !item.completed;
          return item;
        } else {
          return item;
        }
      })
    ]);
  };
  return (
    <li className="todo">
      <div className="todo__container">
        <button
          onClick={handleStatus}
          className={`todo__checkbox ${todo.completed ? 'completed' : ''}`}
        >
          <svg
            className="checkbox__icon"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <p className="todo__text">{todo.description}</p>
        <button className="todo__remove">
          <svg
            className="remove__icon"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </li>
  );
};

export default Todo;
