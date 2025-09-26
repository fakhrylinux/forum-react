import useInput from '../hooks/useInput.js';
import PropTypes from 'prop-types';
import usePasswordValidation from '../hooks/usePasswordValidation.js';

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, error, validate] = usePasswordValidation();

  const handleClick = () => register({ name, email, password });

  return (
    <form>
      <label htmlFor="name">
        <b>Name</b>
      </label>
      <input
        id="name"
        type="text"
        placeholder="Enter Name"
        name="name"
        value={name}
        onChange={onNameChange}
        required
      />

      <label htmlFor="email">
        <b>Email</b>
      </label>
      <input
        id="email"
        type="text"
        placeholder="Enter Email"
        name="email"
        value={email}
        onChange={onEmailChange}
        required
      />

      <label htmlFor="psw">
        <b>Password</b>
      </label>
      <input
        id="psw"
        type="password"
        placeholder="Enter Password"
        name="psw"
        value={password}
        onChange={(e) => validate(e.target.value)}
        required
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div className="clearfix">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleClick}
        >
            Register
        </button>
      </div>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
