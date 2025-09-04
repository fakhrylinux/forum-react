import Navigation from "../components/Navigation.jsx";
import ThreadList from "../components/ThreadList.jsx";

function HomePage() {
  return (
    <>
      <div className="main-content">
        <ThreadList />
      </div>
    </>
  );
}

export default HomePage;
