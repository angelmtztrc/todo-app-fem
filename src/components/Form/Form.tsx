import { nanoid } from 'nanoid';
import { useState } from 'react';

// styles
import './Form.css';

type FormProps = {
  todos: Array<object>;
  setTodos: Function;
};

const Form = ({ todos, setTodos }: FormProps) => {
  const [todo, setTodo] = useState({
    description: '',
    completed: false
  });

  // handle input data
  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setTodo({
      ...todo,
      description: e.currentTarget.value
    });
  };

  // submit the form
  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();

    // validation
    if (todo.description === undefined || todo.description === '') {
      return;
    }

    // save the todo
    setTodos([{ id: nanoid(10), ...todo }, ...todos]);

    // reset form
    setTodo({
      description: '',
      completed: false
    });
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit} className="form__container">
        <span className="form__circle"></span>
        <input
          className="form__input"
          type="text"
          name="description"
          value={todo.description}
          onChange={handleChange}
          placeholder="Create a new todo..."
        />
      </form>
    </div>
  );
};

export default Form;
