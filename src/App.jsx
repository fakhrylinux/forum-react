import HomePage from "./pages/HomePage.jsx";
import { Route, Routes } from "react-router";
import Root from "./pages/Root.jsx";
import DetailPage from "./pages/DetailPage.jsx";
import AddThread from "./pages/AddThread.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { asyncPreloadProcess } from "./states/isPreload/action.js";
import { asyncUnsetAuthUser } from "./states/authUser/action.js";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import Loading from "./components/Loading.jsx";

function App() {
  const { authUser = null, isPreload = false } = useSelector(
    (states) => states,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  if (isPreload) {
    return null;
  }

  if (authUser === null) {
    return (
      <>
        <Loading />
        <main>
          <Routes>
            <Route path="/*" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
      </>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<HomePage />} />
        <Route path="/new" element={<AddThread />} />
        <Route path="/:id" element={<DetailPage />} />
      </Route>
    </Routes>
  );
}

export default App;
