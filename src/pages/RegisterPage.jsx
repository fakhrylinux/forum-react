import "./register-page.css";
import { NavLink, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { asyncRegisterUser } from "../states/users/action.js";
import RegisterInput from "../components/RegisterInput.jsx";

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));
    navigate("/");
  };

  return (
    <>
      <RegisterInput register={onRegister} />
      <p>
        Have an account? <NavLink to="/login">Log in</NavLink>
      </p>
    </>
  );
}

export default RegisterPage;
