import { useState } from 'react';

// components
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Todos from './components/Todos/Todos';

function App() {
  const [scheme, setScheme] = useState<'light' | 'dark'>('light');

  return (
    <div className={`main ${scheme}-scheme`}>
      <Header scheme={scheme} setScheme={setScheme} />
      <div className="main__box">
        <Form />
        <Todos />
      </div>
    </div>
  );
}

export default App;
