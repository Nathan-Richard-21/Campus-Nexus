import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faRobot,
  faHandHoldingUsd,
  faMapMarkerAlt,
  faUtensils,
  faTasks,
  faUserGraduate
} from '@fortawesome/free-solid-svg-icons';
import './NavigationMenu.css';

interface NavigationMenuProps {
  isOpen?: boolean;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ isOpen = false }) => {
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className={`navigation-menu ${isOpen ? 'open' : ''}`}>
            <div className="nav-section">
                <div className="nav-section-title">Main</div>
                <ul>
                    <li>
                        <Link to="/" className={isActive('/') ? 'active' : ''}>
                            <FontAwesomeIcon icon={faHome} />
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/chatbot" className={isActive('/chatbot') ? 'active' : ''}>
                            <FontAwesomeIcon icon={faRobot} />
                            Student Assistant
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="nav-section">
                <div className="nav-section-title">Academic</div>
                <ul>
                    <li>
                        <Link to="/course-registration" className={isActive('/course-registration') ? 'active' : ''}>
                            <FontAwesomeIcon icon={faUserGraduate} />
                            Course Information
                        </Link>
                    </li>
                    <li>
                        <Link to="/module-selection" className={isActive('/module-selection') ? 'active' : ''}>
                            <FontAwesomeIcon icon={faTasks} />
                            Module Selection
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="nav-section">
                <div className="nav-section-title">Campus Life</div>
                <ul>
                    <li>
                        <Link to="/bursary-info" className={isActive('/bursary-info') ? 'active' : ''}>
                            <FontAwesomeIcon icon={faHandHoldingUsd} />
                            Bursary Information
                        </Link>
                    </li>
                    <li>
                        <Link to="/campus-navigation" className={isActive('/campus-navigation') ? 'active' : ''}>
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                            Campus Navigation
                        </Link>
                    </li>
                    <li>
                        <Link to="/food-ordering" className={isActive('/food-ordering') ? 'active' : ''}>
                            <FontAwesomeIcon icon={faUtensils} />
                            Food Ordering
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavigationMenu;