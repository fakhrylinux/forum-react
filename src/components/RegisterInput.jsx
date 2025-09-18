import useInput from "../hooks/useInput.js";
import PropTypes from "prop-types";
import usePasswordValidation from "../hooks/usePasswordValidation.js";

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, error, validate] = usePasswordValidation();

  const handleClick = () => register({ name, email, password });

  return (
    <form style={{ border: "1px solid #ccc" }}>
      <div className="container">
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account.</p>
        <hr />

        <label htmlFor="email">
          <b>Name</b>
        </label>
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          value={name}
          onChange={onNameChange}
          required
        />

        <label htmlFor="email">
          <b>Email</b>
        </label>
        <input
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
          type="password"
          placeholder="Enter Password"
          name="psw"
          value={password}
          onChange={(e) => validate(e.target.value)}
          required
        />
        {error && <p style={{ color: "red" }}>{error}</p>}

        <div className="clearfix">
          <button type="button" className="btn signupbtn" onClick={handleClick}>
            Register
          </button>
        </div>
      </div>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
