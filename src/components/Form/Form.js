// styles
import './Form.css';

const Form = () => {
  return (
    <div className="form">
      <div className="form__container">
        <span className="form__checkbox">
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
        </span>
        <input className="form__input" type="text" name="description" />
      </div>
    </div>
  );
};

export default Form;
