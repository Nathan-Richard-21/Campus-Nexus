import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUserCircle, faBars } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

interface HeaderProps {
  toggleSidebar?: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="header">
      <div className="header-left">
        {toggleSidebar && (
          <button className="menu-toggle" onClick={toggleSidebar} aria-label="Toggle menu">
            <FontAwesomeIcon icon={faBars} />
          </button>
        )}
        <Link to="/" className="logo-text">
          <span className="campus">Campus</span>
          <span className="nexus">Nexus</span>
        </Link>
        <h1 className="header-title">Walter Sisulu University</h1>
      </div>
      <div className="header-right">
        <div className="notification-icon">
          <FontAwesomeIcon icon={faBell} />
        </div>
        <Link to="/login" className="login-button">
          <FontAwesomeIcon icon={faUserCircle} className="icon" />
          <span>Login</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;