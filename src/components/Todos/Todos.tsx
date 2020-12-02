// styles
import './Todos.css';

export interface TodosProps {}

const Todos: React.SFC<TodosProps> = () => {
  return (
    <div className="todos__container">
      <ul className="todos__list"></ul>
      <footer className="todos__footer">
        <p>5 items left</p>
        <div className="todos__filter">
          <p>All</p>
          <p>Active</p>
          <p>Completed</p>
        </div>
        <p>Clear Completed</p>
      </footer>
    </div>
  );
};

export default Todos;
