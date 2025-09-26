import { MdOutlineInsertComment, MdOutlineLogout } from 'react-icons/md';
import { NavLink } from 'react-router';
import PropTypes from 'prop-types';
import { authUserShape } from '../types/index.js';
import IconButton from './styled/IconButton.js';
import Avatar from './styled/Avatar.js';

function Navigation({ authUser, signOut }) {
  const { id, avatar, name } = authUser;

  return (
    <header className="header">
      <div className="header-logo">
        <NavLink to="/">
          <h2>Temu Wicara</h2>
        </NavLink>
      </div>
      <div className="header-icons">
        <NavLink to="/new">
          <MdOutlineInsertComment
            style={{ fontSize: '2rem', color: '#ff6b35' }}
          />
        </NavLink>
        <div className="profile-icon" style={{ width: '2rem' }}>
          <Avatar src={avatar} alt={id} title={name} />
        </div>
        <IconButton id="logout" type="button" onClick={signOut}>
          <MdOutlineLogout style={{ fontSize: '2rem' }} />
        </IconButton>
      </div>
    </header>
  );
}

Navigation.propTypes = {
  authUser: PropTypes.shape(authUserShape).isRequired,
  signOut: PropTypes.func.isRequired,
};

export default Navigation;
