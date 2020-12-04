import { useState } from 'react';

// components
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Todos from './components/Todos/Todos';

export declare type TodoType = {
  id: string;
  description: string;
  completed: boolean;
};

function App() {
  const [scheme, setScheme] = useState<'light' | 'dark'>('light');
  const [todos, setTodos] = useState<Array<TodoType>>([
    {
      id: 'IRFa-VaY2b',
      description: 'Create a React App with Tailwind CSS',
      completed: false
    }
  ]);

  return (
    <div className={`main ${scheme}-scheme`}>
      <Header scheme={scheme} setScheme={setScheme} />
      <div className="main__box">
        <Form todos={todos} setTodos={setTodos} />
        <Todos todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
