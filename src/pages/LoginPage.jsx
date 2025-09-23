import './login-page.css';
import { useDispatch } from 'react-redux';
import { asyncSetAuthUser } from '../states/authUser/action.js';
import LoginInput from '../components/LoginInput.jsx';
import { NavLink } from 'react-router';

function LoginPage() {
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <>
      <LoginInput login={onLogin} />
      <p>
        Don't have an account? <NavLink to="/register">Register</NavLink>
      </p>
    </>
  );
}

export default LoginPage;
