import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#contact">Contact Us</a></li>
                        <li><a href="#faq">FAQ</a></li>
                        <li><a href="#support">Support</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Resources</h3>
                    <ul>
                        <li><a href="#library">Library</a></li>
                        <li><a href="#calendar">Academic Calendar</a></li>
                        <li><a href="#events">Events</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Connect</h3>
                    <ul>
                        <li><a href="#social">Social Media</a></li>
                        <li><a href="#news">Newsletter</a></li>
                        <li><a href="#blog">Blog</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} CampusNexus. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;