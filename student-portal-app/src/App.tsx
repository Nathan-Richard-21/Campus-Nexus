import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import NavigationMenu from './components/NavigationMenu';
import Chatbot from './components/Chatbot/Chatbot';
import BursaryInfo from './components/BursaryInfo/BursaryInfo';
import CampusNavigation from './components/CampusNavigation/CampusNavigation';
import FoodOrdering from './components/FoodOrdering/FoodOrdering';
import SpecialCases from './components/SpecialCases/SpecialCases';
import ModuleSelection from './components/ModuleSelection/ModuleSelection';
import CourseRegistration from './components/CourseRegistration/CourseRegistration';

const App: React.FC = () => {
    return (
        <Router>
            <div className="app">
                <Header />
                <NavigationMenu />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={
                            <div className="home fade-in">
                                <section className="hero">
                                    <h1>Welcome to Walter Sisulu University</h1>
                                    <p className="subtitle">Empowering minds, transforming futures</p>
                                    <div className="cta-buttons">
                                        <button className="cta-primary">
                                            <i className="fas fa-sign-in-alt"></i> Get Started
                                        </button>
                                        <button className="cta-secondary">
                                            <i className="fas fa-info-circle"></i> Learn More
                                        </button>
                                    </div>
                                </section>
                                
                                <section className="feature-section">
                                    <h2>Student Services</h2>
                                    <div className="feature-grid">
                                        <div className="feature-card">
                                            <i className="fas fa-graduation-cap"></i>
                                            <h3>Academic Excellence</h3>
                                            <p>Access course materials and track your academic progress</p>
                                        </div>
                                        <div className="feature-card">
                                            <i className="fas fa-users"></i>
                                            <h3>Student Life</h3>
                                            <p>Join clubs, societies, and campus activities</p>
                                        </div>
                                        <div className="feature-card">
                                            <i className="fas fa-book-reader"></i>
                                            <h3>Library Services</h3>
                                            <p>Access digital resources and research materials</p>
                                        </div>
                                        <div className="feature-card">
                                            <i className="fas fa-calendar-alt"></i>
                                            <h3>Events & Activities</h3>
                                            <p>Stay updated with university events and workshops</p>
                                        </div>
                                    </div>
                                </section>

                                <section className="announcements">
                                    <h2>Latest Announcements</h2>
                                    <div className="announcement-grid">
                                        <div className="announcement-card">
                                            <span className="date">May 9, 2025</span>
                                            <h3>Registration Open</h3>
                                            <p>Second semester registration now open for all faculties</p>
                                        </div>
                                        <div className="announcement-card">
                                            <span className="date">May 8, 2025</span>
                                            <h3>New Library Hours</h3>
                                            <p>Extended library hours during exam period</p>
                                        </div>
                                        <div className="announcement-card">
                                            <span className="date">May 7, 2025</span>
                                            <h3>Career Fair</h3>
                                            <p>Annual career fair coming next week</p>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        } />
                        <Route path="/chatbot" element={<Chatbot />} />
                        <Route path="/bursary-info" element={<BursaryInfo />} />
                        <Route path="/campus-navigation" element={<CampusNavigation />} />
                        <Route path="/food-ordering" element={<FoodOrdering />} />
                        <Route path="/special-cases" element={<SpecialCases />} />
                        <Route path="/module-selection" element={<ModuleSelection />} />
                        <Route path="/course-registration" element={<CourseRegistration />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;