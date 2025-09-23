import { MdOutlineInsertComment, MdOutlineLogout } from 'react-icons/md';
import { NavLink } from 'react-router';
import PropTypes from 'prop-types';
import { authUserShape } from '../types/index.js';

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
        <NavLink to="/new">
          <MdOutlineInsertComment
            style={{ fontSize: '2rem', color: '#ff6b35' }}
          />
        </NavLink>
        <div className="profile-icon" style={{ width: '2rem' }}>
          <img src={avatar} alt={id} title={name} className="avatar" />
        </div>
        <button className="icon-btn" type="button" onClick={signOut}>
          <MdOutlineLogout style={{ fontSize: '2rem' }} />
        </button>
      </div>
    </header>
  );
}

Navigation.propTypes = {
  authUser: PropTypes.shape(authUserShape).isRequired,
  signOut: PropTypes.func.isRequired,
};

export default Navigation;
