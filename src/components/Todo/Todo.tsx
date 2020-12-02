// styles
import './Todo.css';

export interface TodoProps {}

const Todo: React.SFC<TodoProps> = () => {
  return (
    <li className="todo">
      <div className="todo__container">
        <span className="todo__checkbox"></span>
        <p className="todo__text">Create a React App with Tailwind CSS</p>
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
