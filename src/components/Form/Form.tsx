// styles
import './Form.css';

const Form = () => {
  return (
    <div className="form">
      <div className="form__container">
        <span className="form__circle"></span>
        <input
          className="form__input"
          type="text"
          name="description"
          placeholder="Create a new todo..."
        />
      </div>
    </div>
  );
};

export default Form;
