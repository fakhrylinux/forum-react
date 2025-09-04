import { MdForum, MdPerson2 } from "react-icons/md";

function Navigation() {
  return (
    <header className="header">
      <div className="header-logo">
        <h5>Knowledgechain</h5>
      </div>
      <div className="header-icons">
        <a href="/new">
          <MdForum style={{ color: "white" }} />
        </a>
        <a href="#">
          <MdPerson2 style={{ color: "white" }} />
        </a>
      </div>
    </header>
  );
}

export default Navigation;
