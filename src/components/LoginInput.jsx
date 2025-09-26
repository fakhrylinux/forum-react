import useInput from '../hooks/useInput.js';
import PropTypes from 'prop-types';

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  const handleClick = () => login({ email, password });

  return (
    <form>
      <label htmlFor="email">
        <b>Email</b>
      </label>
      <input
        type="text"
        placeholder="Enter Email"
        id="email"
        value={email}
        onChange={onEmailChange}
        required
      />

      <label htmlFor="password">
        <b>Password</b>
      </label>
      <input
        type="password"
        placeholder="Enter Password"
        id="password"
        value={password}
        onChange={onPasswordChange}
        required
      />

      <button className="btn btn-primary" type="button" onClick={handleClick}>
          Login
      </button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
