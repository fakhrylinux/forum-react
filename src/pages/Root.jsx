import Navigation from "../components/Navigation.jsx";
import { Outlet } from "react-router";
import Loading from "../components/Loading.jsx";
import { asyncUnsetAuthUser } from "../states/authUser/action.js";
import { useDispatch, useSelector } from "react-redux";

function Root() {
  const { authUser = null } = useSelector((states) => states);
  const dispatch = useDispatch();

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
  };

  return (
    <>
      <Navigation authUser={authUser} signOut={onSignOut} />
      <Loading />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Root;
