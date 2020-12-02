// components
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Todos from './components/Todos/Todos';

function App() {
  return (
    <div className="main light-scheme">
      <Header />
      <div className="main__box">
        <Form />
        <Todos />
      </div>
    </div>
  );
}

export default App;
