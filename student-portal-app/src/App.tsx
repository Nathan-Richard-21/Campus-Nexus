import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import NavigationMenu from './components/NavigationMenu';
import HomePage from './components/HomePage';
import Chatbot from './components/Chatbot/Chatbot';
import BursaryInfo from './components/BursaryInfo/BursaryInfo';
import CampusNavigation from './components/CampusNavigation/CampusNavigation';
import FoodOrdering from './components/FoodOrdering/FoodOrdering';
import SpecialCases from './components/SpecialCases/SpecialCases';
import ModuleSelection from './components/ModuleSelection/ModuleSelection';
import CourseRegistration from './components/CourseRegistration/CourseRegistration';
import { Login, Signup } from './components/Auth';

const AppContent: React.FC = () => {
    const location = useLocation();
    const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

    return (
        <div className="app">
            {!isAuthPage && <Header />}
            {!isAuthPage && <NavigationMenu />}
            <main className={`main-content ${isAuthPage ? 'auth-main' : ''}`}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/chatbot" element={<Chatbot />} />
                    <Route path="/bursary-info" element={<BursaryInfo />} />
                    <Route path="/campus-navigation" element={<CampusNavigation />} />
                    <Route path="/food-ordering" element={<FoodOrdering />} />
                    <Route path="/special-cases" element={<SpecialCases />} />
                    <Route path="/module-selection" element={<ModuleSelection />} />
                    <Route path="/course-registration" element={<CourseRegistration />} />
                </Routes>
            </main>
            {!isAuthPage && <Footer />}
        </div>
    );
};

const App: React.FC = () => {
    return (
        <Router>
            <AppContent />
        </Router>
    );
};

export default App;