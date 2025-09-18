import {
  MdForum,
  MdOutlineAddComment,
  MdOutlineInsertComment,
  MdPerson2,
} from "react-icons/md";
import { NavLink } from "react-router";
import { useSelector } from "react-redux";

function Navigation() {
  const { authUser } = useSelector((states) => states);

  return (
    <header className="header">
      <div className="header-logo">
        <NavLink to="/">
          <h5>Knowledgechain</h5>
        </NavLink>
      </div>
      <div className="header-icons">
        <a href="/new">
          <MdOutlineInsertComment size="2rem" style={{ color: "white" }} />
        </a>
        <div className="profile-icon" style={{ width: "2rem" }}>
          <img
            src={authUser.avatar}
            alt={authUser.name}
            style={{ borderRadius: "50%" }}
          />
          <div className="profile-logout">
            <a href="/logout">Logout</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
