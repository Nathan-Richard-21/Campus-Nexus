import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CourseRegistration.css';
import DepartmentInfo from './DepartmentInfo';
import FacultyInfo from './FacultyInfo';
import ProgramOfferings from './ProgramOfferings';
import CourseModules from './CourseModules';

const CourseRegistration: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('department');
    const [isPageLoaded, setIsPageLoaded] = useState<boolean>(false);
    const [showHelp, setShowHelp] = useState<boolean>(false);
    const [currentStep, setCurrentStep] = useState<number>(1);

    useEffect(() => {
        setIsPageLoaded(true);
        
        // Check if first visit and show help if it is
        const hasVisited = localStorage.getItem('hasVisitedRegistration');
        if (!hasVisited) {
            setTimeout(() => setShowHelp(true), 1000);
            localStorage.setItem('hasVisitedRegistration', 'true');
        }
    }, []);
    
    const moveToNextTab = (tab: string) => {
        setActiveTab(tab);
        // Scroll to top when changing tabs
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    
    const closeHelp = () => {
        setShowHelp(false);
    };
    
    const nextStep = () => {
        if (currentStep < 4) {
            setCurrentStep(currentStep + 1);
            
            // Change to the appropriate tab based on the step
            switch (currentStep + 1) {
                case 2:
                    setActiveTab('faculty');
                    break;
                case 3:
                    setActiveTab('programs');
                    break;
                case 4:
                    setActiveTab('courses');
                    break;
                default:
                    break;
            }
        } else {
            closeHelp();
        }
    };

    return (
        <div className={`course-registration ${isPageLoaded ? 'loaded' : ''}`}>
            <div className="registration-header">
                <h1>Mathematics and Computing Department</h1>
                <p>Walter Sisulu University</p>
                <button 
                    className="help-button" 
                    onClick={() => setShowHelp(true)} 
                    aria-label="Get help with registration"
                >
                    <i className="fas fa-question-circle"></i>
                </button>
            </div>
            
            <div className="registration-progress">
                <div className={`progress-step ${activeTab === 'department' ? 'active' : ''} ${['faculty', 'programs', 'courses'].includes(activeTab) ? 'completed' : ''}`}>
                    <div className="step-number">1</div>
                    <div className="step-label">Department Info</div>
                </div>
                <div className={`progress-step ${activeTab === 'faculty' ? 'active' : ''} ${['programs', 'courses'].includes(activeTab) ? 'completed' : ''}`}>
                    <div className="step-number">2</div>
                    <div className="step-label">Faculty & Staff</div>
                </div>
                <div className={`progress-step ${activeTab === 'programs' ? 'active' : ''} ${['courses'].includes(activeTab) ? 'completed' : ''}`}>
                    <div className="step-number">3</div>
                    <div className="step-label">Programs</div>
                </div>
                <div className={`progress-step ${activeTab === 'courses' ? 'active' : ''}`}>
                    <div className="step-number">4</div>
                    <div className="step-label">Course Modules</div>
                </div>
            </div>
            
            <div className="registration-navigation">
                <button 
                    className={activeTab === 'department' ? 'active' : ''} 
                    onClick={() => setActiveTab('department')}>
                    <i className="fas fa-university"></i> Department Overview
                </button>
                <button 
                    className={activeTab === 'faculty' ? 'active' : ''} 
                    onClick={() => setActiveTab('faculty')}>
                    <i className="fas fa-chalkboard-teacher"></i> Faculty & Staff
                </button>
                <button 
                    className={activeTab === 'programs' ? 'active' : ''} 
                    onClick={() => setActiveTab('programs')}>
                    <i className="fas fa-graduation-cap"></i> Programs
                </button>
                <button 
                    className={activeTab === 'courses' ? 'active' : ''} 
                    onClick={() => setActiveTab('courses')}>
                    <i className="fas fa-book"></i> Course Modules
                </button>
            </div>
            
            <div className="registration-content">
                {activeTab === 'department' && (
                    <div className="tab-container">
                        <DepartmentInfo />
                        <div className="tab-navigation">
                            <button className="next-tab-btn" onClick={() => moveToNextTab('faculty')}>
                                Next: Faculty & Staff <i className="fas fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                )}
                
                {activeTab === 'faculty' && (
                    <div className="tab-container">
                        <FacultyInfo />
                        <div className="tab-navigation">
                            <button className="prev-tab-btn" onClick={() => moveToNextTab('department')}>
                                <i className="fas fa-arrow-left"></i> Previous: Department Info
                            </button>
                            <button className="next-tab-btn" onClick={() => moveToNextTab('programs')}>
                                Next: Programs <i className="fas fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                )}
                
                {activeTab === 'programs' && (
                    <div className="tab-container">
                        <ProgramOfferings />
                        <div className="tab-navigation">
                            <button className="prev-tab-btn" onClick={() => moveToNextTab('faculty')}>
                                <i className="fas fa-arrow-left"></i> Previous: Faculty & Staff
                            </button>
                            <button className="next-tab-btn" onClick={() => moveToNextTab('courses')}>
                                Next: Course Modules <i className="fas fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                )}
                
                {activeTab === 'courses' && (
                    <div className="tab-container">
                        <div className="module-selection-guidance">
                            <div className="guidance-icon">
                                <i className="fas fa-lightbulb"></i>
                            </div>
                            <div className="guidance-content">
                                <h3>How to Select Your Modules</h3>
                                <p>Please select modules based on your program requirements. First-year students should select all required semester 1 modules for their program.</p>
                                <ul className="guidance-tips">
                                    <li><strong>BSc Mathematics ECP students:</strong> Select all level 1, semester 1 modules marked for your program.</li>
                                    <li><strong>Check prerequisites:</strong> Ensure you meet all prerequisites before selecting advanced modules.</li>
                                    <li><strong>Credit load:</strong> A typical semester requires 60-72 credits of coursework.</li>
                                    <li><strong>Required vs. Elective:</strong> Focus on required modules for your program first.</li>
                                </ul>
                                
                                <div className="proceed-to-registration">
                                    <p>After reviewing the available modules, proceed to the course registration system:</p>
                                    <Link to="/module-selection" className="registration-link-button">
                                        <i className="fas fa-edit"></i> Go to Course Registration & Personal Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <CourseModules />
                        <div className="tab-navigation">
                            <button className="prev-tab-btn" onClick={() => moveToNextTab('programs')}>
                                <i className="fas fa-arrow-left"></i> Previous: Programs
                            </button>
                            <Link to="/module-selection" className="next-tab-btn">
                                Go to Course Registration <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
            
            {showHelp && (
                <div className="registration-help-overlay">
                    <div className="registration-help-modal">
                        <button className="close-help" onClick={closeHelp}>×</button>
                        <div className="help-content">
                            <h3>Registration Guide: Step {currentStep} of 4</h3>
                            
                            {currentStep === 1 && (
                                <div className="help-step">
                                    <div className="help-icon">
                                        <i className="fas fa-university"></i>
                                    </div>
                                    <div>
                                        <h4>Department Overview</h4>
                                        <p>Start by getting familiar with the Mathematics and Computing Department. 
                                        Read about our vision, mission, and what makes our department unique.</p>
                                    </div>
                                </div>
                            )}
                            
                            {currentStep === 2 && (
                                <div className="help-step">
                                    <div className="help-icon">
                                        <i className="fas fa-chalkboard-teacher"></i>
                                    </div>
                                    <div>
                                        <h4>Faculty & Staff</h4>
                                        <p>Meet our faculty and staff members. Learn about their areas of specialization 
                                        to find potential mentors or advisors in your field of interest.</p>
                                    </div>
                                </div>
                            )}
                            
                            {currentStep === 3 && (
                                <div className="help-step">
                                    <div className="help-icon">
                                        <i className="fas fa-graduation-cap"></i>
                                    </div>
                                    <div>
                                        <h4>Programs</h4>
                                        <p>Explore our program offerings and find the one that best matches your 
                                        academic goals and interests. Pay special attention to entry requirements.</p>
                                    </div>
                                </div>
                            )}
                            
                            {currentStep === 4 && (
                                <div className="help-step">
                                    <div className="help-icon">
                                        <i className="fas fa-book"></i>
                                    </div>
                                    <div>
                                        <h4>Course Modules</h4>
                                        <p>Browse through available course modules for your chosen program. 
                                        Filter by program, level, and semester to find the relevant courses. 
                                        When you're ready, click on "Go to Course Registration" to proceed with registration.</p>
                                    </div>
                                </div>
                            )}
                            
                            <div className="help-navigation">
                                <button className="help-next-btn" onClick={nextStep}>
                                    {currentStep < 4 ? 'Next Step' : 'Got It!'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CourseRegistration;