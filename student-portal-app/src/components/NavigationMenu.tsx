import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationMenu.css';

const NavigationMenu: React.FC = () => {
    return (
        <nav className="navigation-menu">
            <ul>
                <li>
                    <Link to="/"><i className="fas fa-home"></i>Home</Link>
                </li>
                <li>
                    <Link to="/chatbot"><i className="fas fa-robot"></i>Chatbot</Link>
                </li>
                <li>
                    <Link to="/bursary-info"><i className="fas fa-hand-holding-usd"></i>Bursary Information</Link>
                </li>
                <li>
                    <Link to="/campus-navigation"><i className="fas fa-map-marker-alt"></i>Campus Navigation</Link>
                </li>
                <li>
                    <Link to="/food-ordering"><i className="fas fa-utensils"></i>Food Ordering</Link>
                </li>
                <li>
                    <Link to="/special-cases"><i className="fas fa-exclamation-circle"></i>Special Cases</Link>
                </li>
                <li>
                    <Link to="/module-selection"><i className="fas fa-tasks"></i>Module Selection</Link>
                </li>
                <li>
                    <Link to="/course-registration"><i className="fas fa-user-graduate"></i>Course Registration</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavigationMenu;