import React, { useState } from 'react';
import './DepartmentInfo.css';

const DepartmentInfo: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>('overview');

    return (
        <div className="department-info">
            <div className="section-navigation">
                <button 
                    className={activeSection === 'overview' ? 'active' : ''}
                    onClick={() => setActiveSection('overview')}>
                    Overview
                </button>
                <button 
                    className={activeSection === 'vision' ? 'active' : ''}
                    onClick={() => setActiveSection('vision')}>
                    Vision & Mission
                </button>
                <button 
                    className={activeSection === 'values' ? 'active' : ''}
                    onClick={() => setActiveSection('values')}>
                    Values
                </button>
            </div>

            <div className="section-content">
                {activeSection === 'overview' && (
                    <div className="section-overview animate-in">
                        <h2>Department Overview</h2>
                        <div className="department-image">
                            <img src="/images/math-department.jpg" alt="Mathematics and Computing Department" />
                        </div>
                        <p>
                            The Department of Mathematics and Computing at Walter Sisulu University offers a diverse range of academic programs 
                            designed to equip students with analytical, computational, and problem-solving skills essential for success in 
                            today's digital and data-driven world.
                        </p>
                        <p>
                            Our department is committed to excellence in teaching, research, and community engagement. We provide a supportive 
                            learning environment where students can develop their mathematical and computational thinking, creativity, and 
                            innovation capabilities.
                        </p>
                        <p>
                            With state-of-the-art facilities and dedicated faculty members who are experts in their fields, we strive to 
                            offer a comprehensive educational experience that prepares students for exciting careers in mathematics, statistics, 
                            computer science, and related industries.
                        </p>
                        <div className="stats-container">
                            <div className="stat-card">
                                <h3>4</h3>
                                <p>Degree Programs</p>
                            </div>
                            <div className="stat-card">
                                <h3>30+</h3>
                                <p>Course Modules</p>
                            </div>
                            <div className="stat-card">
                                <h3>15+</h3>
                                <p>Expert Faculty</p>
                            </div>
                            <div className="stat-card">
                                <h3>500+</h3>
                                <p>Enrolled Students</p>
                            </div>
                        </div>
                    </div>
                )}

                {activeSection === 'vision' && (
                    <div className="section-vision animate-in">
                        <h2>Vision & Mission</h2>
                        
                        <div className="vision-card">
                            <div className="icon">
                                <i className="fas fa-eye"></i>
                            </div>
                            <div className="content">
                                <h3>Vision</h3>
                                <p>
                                    To be a leading center of excellence in Mathematics and Computing education, research, 
                                    and innovation in Africa, producing graduates who are equipped to address complex challenges 
                                    and contribute to technological advancement and scientific discovery.
                                </p>
                            </div>
                        </div>

                        <div className="mission-card">
                            <div className="icon">
                                <i className="fas fa-flag"></i>
                            </div>
                            <div className="content">
                                <h3>Mission</h3>
                                <ul>
                                    <li>
                                        Provide high-quality education in mathematics, statistics, and computer science that meets 
                                        international standards and addresses local and regional needs.
                                    </li>
                                    <li>
                                        Conduct innovative research that contributes to knowledge creation and solves real-world problems.
                                    </li>
                                    <li>
                                        Foster a culture of critical thinking, creativity, and ethical conduct among students and faculty.
                                    </li>
                                    <li>
                                        Engage with communities, industries, and government to promote the applications of mathematics 
                                        and computing in addressing societal challenges.
                                    </li>
                                    <li>
                                        Create an inclusive learning environment that respects diversity and promotes collaboration.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

                {activeSection === 'values' && (
                    <div className="section-values animate-in">
                        <h2>Our Core Values</h2>
                        
                        <div className="values-container">
                            <div className="value-card">
                                <div className="value-icon">
                                    <i className="fas fa-search"></i>
                                </div>
                                <h3>Academic Excellence</h3>
                                <p>We pursue the highest standards in teaching, learning, and research.</p>
                            </div>

                            <div className="value-card">
                                <div className="value-icon">
                                    <i className="fas fa-lightbulb"></i>
                                </div>
                                <h3>Innovation</h3>
                                <p>We encourage creative thinking and the development of new ideas and approaches.</p>
                            </div>

                            <div className="value-card">
                                <div className="value-icon">
                                    <i className="fas fa-handshake"></i>
                                </div>
                                <h3>Collaboration</h3>
                                <p>We value teamwork, partnerships, and interdisciplinary cooperation.</p>
                            </div>

                            <div className="value-card">
                                <div className="value-icon">
                                    <i className="fas fa-globe-africa"></i>
                                </div>
                                <h3>Relevance</h3>
                                <p>We ensure our teaching and research address African contexts and global challenges.</p>
                            </div>

                            <div className="value-card">
                                <div className="value-icon">
                                    <i className="fas fa-balance-scale"></i>
                                </div>
                                <h3>Integrity</h3>
                                <p>We uphold ethical principles in all our academic and professional endeavors.</p>
                            </div>

                            <div className="value-card">
                                <div className="value-icon">
                                    <i className="fas fa-users"></i>
                                </div>
                                <h3>Inclusivity</h3>
                                <p>We embrace diversity and provide equal opportunities for all.</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DepartmentInfo;
