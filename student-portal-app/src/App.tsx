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
                            <div className="home">
                                <h1>Welcome to Student Portal</h1>
                                <p>Access all your student services in one place</p>
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