import HomePage from "./pages/HomePage.jsx";
import { Route, Routes } from "react-router";
import Root from "./pages/Root.jsx";
import ThreadDetail from "./pages/ThreadDetail.jsx";
import AddThread from "./pages/AddThread.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<HomePage />} />
        <Route path="/new" element={<AddThread />} />
        <Route path="/detail" element={<ThreadDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
