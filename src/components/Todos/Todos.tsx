import { useState } from 'react';

// styles
import './Todos.css';
// components
import Todo from '../Todo/Todo';
// types
import { TodoType } from '../../App';

type TodosProps = {
  todos: Array<TodoType>;
  setTodos: Function;
};

const Todos = ({ todos, setTodos }: TodosProps) => {
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  const handleClear = () => {
    setTodos([...todos.filter(todo => !todo.completed)]);
  };

  return (
    <div className="todos__container">
      <ul className="todos__list">
        {filter === 'completed'
          ? todos
              .filter(todo => todo.completed)
              .map(todo => <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />)
          : filter === 'active'
          ? todos
              .filter(todo => !todo.completed)
              .map(todo => <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />)
          : todos.map(todo => <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />)}
      </ul>
      <footer className="todos__footer">
        <p>{todos.filter(todo => !todo.completed).length} items left</p>
        <div className="todos__filter">
          <p className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>
            All
          </p>
          <p className={filter === 'active' ? 'active' : ''} onClick={() => setFilter('active')}>
            Active
          </p>
          <p
            className={filter === 'completed' ? 'active' : ''}
            onClick={() => setFilter('completed')}
          >
            Completed
          </p>
        </div>
        <p onClick={handleClear}>Clear Completed</p>
      </footer>
    </div>
  );
};

export default Todos;
