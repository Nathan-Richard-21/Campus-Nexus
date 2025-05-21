import React, { useState } from 'react';
import './ProgramOfferings.css';

interface Program {
    id: number;
    name: string;
    code: string;
    duration: string;
    credits: number;
    description: string;
    highlights: string[];
    career: string[];
    requirements: string;
    structure?: {
        year: number;
        modules: string[];
    }[];
}

const ProgramOfferings: React.FC = () => {
    const [activeProgram, setActiveProgram] = useState<number>(5); // Default to ECP program
    const [activeTab, setActiveTab] = useState<string>('overview');

    const programs: Program[] = [
        {
            id: 1,
            name: "BSc in Applied Statistical Science",
            code: "BSCASCS",
            duration: "3 years",
            credits: 360,
            description: "The Applied Statistical Science program provides a solid foundation in statistics with strong emphasis on practical applications in various fields including health sciences, finance, and social sciences. Students will learn how to collect, analyze, interpret, and present data to inform decision-making processes.",
            highlights: [
                "Comprehensive statistical methodology",
                "Data analytics and visualization",
                "Statistical computing and programming",
                "Research design and analysis",
                "Applications in multiple domains"
            ],
            career: [
                "Statistical Analyst",
                "Data Scientist",
                "Research Analyst",
                "Market Research Specialist",
                "Biostatistician",
                "Financial Analyst",
                "Quality Control Analyst"
            ],
            requirements: "National Senior Certificate (NSC) with Bachelor's degree endorsement. Mathematics (60%) and English (50%) are required. Life Sciences or Physical Sciences (50%) are recommended."
        },
        {
            id: 2,
            name: "BSc in Applied Mathematics",
            code: "BSCAMAT",
            duration: "3 years",
            credits: 360,
            description: "The Applied Mathematics program focuses on mathematical modeling and problem-solving in real-world contexts. Students develop mathematical expertise applicable to a variety of scientific, technological, and business challenges. The program emphasizes computational methods and mathematical theory.",
            highlights: [
                "Mathematical modeling",
                "Differential equations",
                "Numerical methods",
                "Optimization techniques",
                "Mathematical computing",
                "Operations research"
            ],
            career: [
                "Mathematical Modeler",
                "Operations Research Analyst",
                "Financial Mathematician",
                "Actuarial Analyst",
                "Research Scientist",
                "Systems Analyst",
                "Optimization Specialist"
            ],
            requirements: "National Senior Certificate (NSC) with Bachelor's degree endorsement. Mathematics (65%) and English (50%) are required. Physical Sciences (50%) is recommended."
        },
        {
            id: 3,
            name: "BSc in Computer Science",
            code: "BSCCOMP",
            duration: "3 years",
            credits: 360,
            description: "The Computer Science program provides a comprehensive education in software development, computer systems, and computational theory. Students gain practical skills in programming, system design, and problem-solving while understanding the theoretical foundations of computing.",
            highlights: [
                "Programming and software development",
                "Data structures and algorithms",
                "Database systems",
                "Computer networks",
                "Artificial intelligence",
                "Human-computer interaction",
                "Web and mobile development"
            ],
            career: [
                "Software Developer",
                "Web Developer",
                "Systems Analyst",
                "Database Administrator",
                "Network Engineer",
                "Software Architect",
                "AI Application Developer",
                "IT Consultant"
            ],
            requirements: "National Senior Certificate (NSC) with Bachelor's degree endorsement. Mathematics (60%) and English (50%) are required. Physical Sciences or Information Technology (50%) are recommended."
        },        {
            id: 4,
            name: "BSc in Mathematics",
            code: "BSCMATH",
            duration: "3 years",
            credits: 360,
            description: "The Mathematics program offers a strong theoretical foundation in pure mathematics. Students explore abstract mathematical concepts and develop rigorous analytical and logical thinking skills. The program prepares students for advanced study in mathematics and related disciplines.",
            highlights: [
                "Abstract algebra",
                "Real and complex analysis",
                "Topology",
                "Number theory",
                "Discrete mathematics",
                "Mathematical logic",
                "History of mathematics"
            ],
            career: [
                "Mathematics Educator",
                "Research Mathematician",
                "Cryptographer",
                "Quantitative Analyst",
                "Statistical Consultant",
                "Algorithm Designer",
                "Academic Researcher"
            ],
            requirements: "National Senior Certificate (NSC) with Bachelor's degree endorsement. Mathematics (70%) and English (50%) are required. Physical Sciences (50%) is recommended."
        },
        {
            id: 5,
            name: "BSc in Mathematics ECP",
            code: "WS5618",
            duration: "4 years",
            credits: 360,
            description: "The Bachelor of Science in Mathematics Extended Curriculum Program (ECP) leads to the same qualifications as the mainstream BSc in Mathematics programme. It provides students from disadvantaged backgrounds with an adequate level of foundational competence which is based on specific and discipline-related knowledge. The first 2 years of the BSc Mathematics (Extended Programme) are equivalent to the first year of the BSc Mathematics programme.",
            highlights: [
                "Extended learning timeframe for deeper understanding",
                "Enhanced foundation in mathematical concepts",
                "Focus on academic skill development",
                "Bridging the gap for disadvantaged learners",
                "Same qualification as mainstream program",
                "Comprehensive support system",
                "Improved retention and throughput rates",
                "Additional tutorials and practical sessions",
                "Personalized academic guidance",
                "Integration of mathematics with real-world applications"
            ],
            career: [
                "Mathematics Educator",
                "Research Mathematician",
                "Cryptographer",
                "Quantitative Analyst",
                "Statistical Consultant",
                "Algorithm Designer",
                "Academic Researcher",
                "Data Scientist",
                "Business Analyst",
                "Financial Modeler"
            ],
            requirements: "National Senior Certificate (NSC) with a bachelor's endorsement and an achievement rating of Level 4 for any one or Level 3 for the remaining of the two subjects: English Level 3 or 4, Mathematics Level 3 or 4, and Physical Science Level 3 or 4. Admission point score (APS) of 10 for these subjects.",
            structure: [
                {
                    year: 1,
                    modules: [
                        "MA15M1A: Precalculus & Calculus I A",
                        "AP15M1A: Introduction to Vector and Linear Algebra IA",
                        "ST15M1A: Descriptive Statistics & Probability A",
                        "CK15M0A: Communication Skills",
                        "CS15M1A: Computer Science Fundamentals",
                        "MA15M2A: Precalculus & Calculus II A",
                        "AP15M2A: Introduction to Vector and Linear Algebra 2A",
                        "ST15M2A: Probability Distributions A",
                        "CS15M2A: Introduction to Programming I A"
                    ]
                },
                {
                    year: 2,
                    modules: [
                        "MA15M1B: Precalculus & Calculus III B",
                        "AP15M1B: Linear Algebra IB",
                        "ST15M1B: Statistical Inference I B",
                        "CS15M1B: Object Oriented Programming B",
                        "MA15M2B: Calculus IV B",
                        "AP15M2B: Linear Algebra II B",
                        "ST15M2B: Statistical Inference II B",
                        "CS15M2B: Data Structures & Algorithms B"
                    ]
                },
                {
                    year: 3,
                    modules: [
                        "MA25M1E: Calculus V",
                        "MA25M2E: Abstract Algebra",
                        "MA25M3E: Vector Analysis",
                        "ST25M1E: Applied Statistics I",
                        "MA25M4E: Real Analysis",
                        "MA25M5E: Differential Equations",
                        "MA25M6E: Discrete Mathematics",
                        "ST25M2E: Applied Statistics II"
                    ]
                },
                {
                    year: 4,
                    modules: [
                        "MA35M1E: Advanced Calculus",
                        "MA35M2E: Complex Analysis",
                        "MA35M3E: Number Theory",
                        "MA35M4E: Research Methodology",
                        "MA35M5E: Topology",
                        "MA35M6E: Mathematics Research Project",
                        "MA35M7E: History of Mathematics",
                        "MA35M8E: Mathematical Modeling"
                    ]
                }
            ]
        }
    ];

    // Get the active program details
    const activeProgDetails = programs.find(program => program.id === activeProgram);

    return (
        <div className="program-offerings">
            <h2>Program Offerings</h2>
            <p className="programs-intro">
                Our department offers a diverse range of undergraduate degree programs designed to equip students 
                with the knowledge and skills needed for success in mathematics, statistics, and computer science fields.
            </p>
            
            <div className="programs-container">
                <div className="program-nav">
                    {programs.map((program) => (
                        <div 
                            key={program.id}
                            className={`program-nav-item ${activeProgram === program.id ? 'active' : ''}`}
                            onClick={() => {
                                setActiveProgram(program.id);
                                setActiveTab('overview');
                            }}
                        >
                            <div className="program-nav-content">
                                <h3>{program.name}</h3>
                                <span className="program-code">{program.code}</span>
                                <div className="program-meta">
                                    <span><i className="fas fa-clock"></i> {program.duration}</span>
                                    <span><i className="fas fa-award"></i> {program.credits} Credits</span>
                                </div>
                            </div>
                            {activeProgram === program.id && <div className="active-indicator"></div>}
                        </div>
                    ))}
                </div>
                
                <div className="program-details">
                    {activeProgDetails && (
                        <div className="program-detail-content">
                            <h2>{activeProgDetails.name}</h2>
                            
                            <div className="program-tabs">
                                <button 
                                    className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('overview')}
                                >
                                    <i className="fas fa-info-circle"></i> Overview
                                </button>
                                <button 
                                    className={`tab-btn ${activeTab === 'structure' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('structure')}
                                >
                                    <i className="fas fa-th-list"></i> Program Structure
                                </button>
                                <button 
                                    className={`tab-btn ${activeTab === 'admission' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('admission')}
                                >
                                    <i className="fas fa-user-graduate"></i> Admission Requirements
                                </button>
                                <button 
                                    className={`tab-btn ${activeTab === 'career' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('career')}
                                >
                                    <i className="fas fa-briefcase"></i> Career Opportunities
                                </button>
                            </div>
                            
                            <div className="tab-content">
                                {activeTab === 'overview' && (
                                    <div className="overview-tab">
                                        <div className="info-grid">
                                            <div className="info-block">
                                                <div className="info-icon">
                                                    <i className="fas fa-graduation-cap"></i>
                                                </div>
                                                <div className="info-content">
                                                    <h4>Program Code</h4>
                                                    <p>{activeProgDetails.code}</p>
                                                </div>
                                            </div>
                                            <div className="info-block">
                                                <div className="info-icon">
                                                    <i className="fas fa-clock"></i>
                                                </div>
                                                <div className="info-content">
                                                    <h4>Duration</h4>
                                                    <p>{activeProgDetails.duration}</p>
                                                </div>
                                            </div>
                                            <div className="info-block">
                                                <div className="info-icon">
                                                    <i className="fas fa-award"></i>
                                                </div>
                                                <div className="info-content">
                                                    <h4>Total Credits</h4>
                                                    <p>{activeProgDetails.credits}</p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="program-description">
                                            <h3>Program Description</h3>
                                            <p>{activeProgDetails.description}</p>
                                        </div>
                                        
                                        <div className="program-highlights">
                                            <h3>Program Highlights</h3>
                                            <ul className="highlight-list">
                                                {activeProgDetails.highlights.map((highlight, index) => (
                                                    <li key={index} className="highlight-item">
                                                        <i className="fas fa-check-circle"></i>
                                                        <span>{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        
                                        <div className="program-action">
                                            <button className="btn-view-modules">
                                                <i className="fas fa-book"></i> View Course Modules
                                            </button>
                                            <button className="btn-apply">
                                                <i className="fas fa-paper-plane"></i> Apply for This Program
                                            </button>
                                        </div>
                                    </div>
                                )}
                                
                                {activeTab === 'structure' && (
                                    <div className="structure-tab">
                                        <h3>Program Structure</h3>
                                        <p className="structure-intro">
                                            The {activeProgDetails.name} is a {activeProgDetails.duration} program 
                                            consisting of {activeProgDetails.credits} credits. Below is the year-by-year 
                                            structure of the program with all required modules.
                                        </p>
                                        
                                        {activeProgDetails.structure ? (
                                            <div className="year-structure">
                                                {activeProgDetails.structure.map((year, index) => (
                                                    <div className="year-block" key={index}>
                                                        <h4>Year {year.year}</h4>
                                                        <div className="year-modules">
                                                            {year.modules.map((module, moduleIndex) => (
                                                                <div className="module-item" key={moduleIndex}>
                                                                    <i className="fas fa-book"></i>
                                                                    <span>{module}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <p className="no-structure">Detailed structure information is not available for this program.</p>
                                        )}
                                        
                                        <div className="structure-note">
                                            <i className="fas fa-info-circle"></i>
                                            <p>The structure above shows the recommended sequence of modules. 
                                            Prerequisites must be met before enrolling in advanced modules. 
                                            For detailed module descriptions, please visit the Course Modules section.</p>
                                        </div>
                                    </div>
                                )}
                                
                                {activeTab === 'admission' && (
                                    <div className="admission-tab">
                                        <h3>Admission Requirements</h3>
                                        <div className="admission-container">
                                            <div className="admission-icon">
                                                <i className="fas fa-clipboard-check"></i>
                                            </div>
                                            <div className="admission-content">
                                                <h4>Entry Requirements</h4>
                                                <p>{activeProgDetails.requirements}</p>
                                            </div>
                                        </div>
                                        
                                        {activeProgram === 5 && (
                                            <div className="ecp-specific">
                                                <h4>ECP-Specific Information</h4>
                                                <div className="ecp-info-block">
                                                    <i className="fas fa-users"></i>
                                                    <div>
                                                        <h5>Target Students</h5>
                                                        <p>The Extended Curriculum Program is specifically designed for students from 
                                                        disadvantaged educational backgrounds who show potential but may not meet the 
                                                        regular admission requirements for the standard BSc Mathematics program.</p>
                                                    </div>
                                                </div>
                                                <div className="ecp-info-block">
                                                    <i className="fas fa-chalkboard-teacher"></i>
                                                    <div>
                                                        <h5>Additional Support</h5>
                                                        <p>Students enrolled in the ECP receive additional academic support including 
                                                        extra tutorials, extended laboratory sessions, academic mentorship, and 
                                                        specialized foundation courses.</p>
                                                    </div>
                                                </div>
                                                <div className="ecp-info-block">
                                                    <i className="fas fa-chart-line"></i>
                                                    <div>
                                                        <h5>Progression</h5>
                                                        <p>Students must pass all modules in the first two years of the program to 
                                                        progress to the mainstream BSc Mathematics program for the third and fourth years.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                          <div className="application-process">
                                            <h4>How to Apply</h4>
                                            <ul className="application-steps">
                                                <li>
                                                    <span className="step-number">1</span>
                                                    <div className="step-info">
                                                        <strong>Online Application</strong>
                                                        <p>Complete the online application form on the Walter Sisulu University website</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span className="step-number">2</span>
                                                    <div className="step-info">
                                                        <strong>Document Submission</strong>
                                                        <p>Submit certified copies of your academic records and identification</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span className="step-number">3</span>
                                                    <div className="step-info">
                                                        <strong>Application Fee</strong>
                                                        <p>Pay the non-refundable application fee</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span className="step-number">4</span>
                                                    <div className="step-info">
                                                        <strong>Admission Decision</strong>
                                                        <p>Await the admission decision from the Mathematics and Computing Department</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                )}
                                
                                {activeTab === 'career' && (
                                    <div className="career-tab">
                                        <h3>Career Opportunities</h3>
                                        <p className="career-intro">
                                            Graduates of the {activeProgDetails.name} program are equipped with valuable 
                                            analytical and problem-solving skills that are highly sought after in various industries.
                                        </p>
                                        
                                        <div className="career-grid">
                                            {activeProgDetails.career.map((career, index) => (
                                                <div className="career-card" key={index}>
                                                    <i className="fas fa-briefcase"></i>
                                                    <h4>{career}</h4>
                                                </div>
                                            ))}
                                        </div>
                                        
                                        {activeProgram === 5 && (
                                            <div className="industry-sectors">
                                                <h4>Industry Sectors</h4>
                                                <div className="sector-grid">
                                                    <div className="sector">
                                                        <i className="fas fa-chart-pie"></i>
                                                        <h5>Finance & Banking</h5>
                                                    </div>
                                                    <div className="sector">
                                                        <i className="fas fa-school"></i>
                                                        <h5>Education</h5>
                                                    </div>
                                                    <div className="sector">
                                                        <i className="fas fa-flask"></i>
                                                        <h5>Research</h5>
                                                    </div>
                                                    <div className="sector">
                                                        <i className="fas fa-laptop-code"></i>
                                                        <h5>Information Technology</h5>
                                                    </div>
                                                    <div className="sector">
                                                        <i className="fas fa-industry"></i>
                                                        <h5>Manufacturing</h5>
                                                    </div>
                                                    <div className="sector">
                                                        <i className="fas fa-government"></i>
                                                        <h5>Government</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProgramOfferings;
