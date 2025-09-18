import Navigation from "../components/Navigation.jsx";
import { Outlet } from "react-router";
import Loading from "../components/Loading.jsx";

function Root() {
  return (
    <>
      <Loading />
      <Navigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Root;
