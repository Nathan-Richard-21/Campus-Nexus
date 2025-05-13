import React from 'react';
import './Header.css';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header-content">
                <div className="logo">
                    <h1>CampusNexus</h1>
                    <span className="tagline">Your Student Portal</span>
                </div>
                <div className="user-section">
                    <span className="welcome-text">Welcome, Student</span>
                    <button className="login-button">
                        <i className="fas fa-user"></i>
                        Login
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;