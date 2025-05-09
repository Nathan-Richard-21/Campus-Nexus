import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationMenu.css';

const NavigationMenu: React.FC = () => {
    return (
        <nav className="navigation-menu">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/chatbot">Chatbot</Link>
                </li>
                <li>
                    <Link to="/bursary-info">Bursary Information</Link>
                </li>
                <li>
                    <Link to="/campus-navigation">Campus Navigation</Link>
                </li>
                <li>
                    <Link to="/food-ordering">Food Ordering</Link>
                </li>
                <li>
                    <Link to="/special-cases">Special Cases</Link>
                </li>
                <li>
                    <Link to="/module-selection">Module Selection</Link>
                </li>
                <li>
                    <Link to="/course-registration">Course Registration</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavigationMenu;