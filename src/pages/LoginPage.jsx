import "./login-page.css";
import { useDispatch } from "react-redux";
import { asyncSetAuthUser } from "../states/authUser/action.js";
import LoginInput from "../components/LoginInput.jsx";

function LoginPage() {
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return <LoginInput login={onLogin} />;
}

export default LoginPage;
