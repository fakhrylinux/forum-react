import Navigation from "../components/Navigation.jsx";
import { Outlet } from "react-router";
import Loading from "../components/Loading.jsx";

function Root() {
  return (
    <>
      <Navigation />
      <Loading />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Root;
