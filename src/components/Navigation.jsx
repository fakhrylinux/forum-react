import { MdOutlineInsertComment, MdOutlineLogout } from "react-icons/md";
import { NavLink } from "react-router";
import PropTypes from "prop-types";

function Navigation({ authUser, signOut }) {
  const { id, avatar, name } = authUser;

  return (
    <header className="header">
      <div className="header-logo">
        <NavLink to="/">
          <h5>Temu Wicara</h5>
        </NavLink>
      </div>
      <div className="header-icons">
        <a href="/new">
          <MdOutlineInsertComment size="2rem" style={{ color: "white" }} />
        </a>
        <div className="profile-icon" style={{ width: "2rem" }}>
          <img
            src={avatar}
            alt={id}
            title={name}
            style={{ borderRadius: "50%" }}
          />
        </div>
        <button type="button" onClick={signOut}>
          <MdOutlineLogout />
        </button>
      </div>
    </header>
  );
}

const authUserShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};

Navigation.propTypes = {
  authUser: PropTypes.shape(authUserShape).isRequired,
  signOut: PropTypes.func.isRequired,
};

export default Navigation;
