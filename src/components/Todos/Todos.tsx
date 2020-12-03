import { useState } from 'react';

// styles
import './Todos.css';
// components
import Todo from '../Todo/Todo';
// types
import { TodoType } from '../../App';

type TodosProps = {
  todos: Array<TodoType>;
};

const Todos = ({ todos }: TodosProps) => {
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');
  return (
    <div className="todos__container">
      <ul className="todos__list">
        {filter === 'completed'
          ? todos
              .filter(todo => todo.completed)
              .map(todo => <Todo key={todo.description} todo={todo} />)
          : filter === 'active'
          ? todos
              .filter(todo => !todo.completed)
              .map(todo => <Todo key={todo.description} todo={todo} />)
          : todos.map(todo => <Todo key={todo.description} todo={todo} />)}
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
        <p>Clear Completed</p>
      </footer>
    </div>
  );
};

export default Todos;
