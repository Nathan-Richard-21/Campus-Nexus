import React, { useState } from 'react';
import './CourseModules.css';

interface Module {
    id: number;
    code: string;
    name: string;
    level: number;
    credits: number;
    program: string[];
    semester: number;
    description: string;
    prerequisites: string[];
    outcomes: string[];
    assessment: string;
    courseConvener?: string;
    offeringSite?: string;
}

const CourseModules: React.FC = () => {
    const [selectedProgram, setSelectedProgram] = useState<string>('all');
    const [selectedLevel, setSelectedLevel] = useState<number>(0);
    const [selectedSemester, setSelectedSemester] = useState<number>(0);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [expandedModule, setExpandedModule] = useState<number | null>(null);    const modules: Module[] = [
        {
            id: 1,
            code: "MA15M1A",
            name: "PRECALCULUS & CALCULUS I A",
            level: 1,
            credits: 8,
            program: ["BSCMATH", "BSCAMAT", "BSCASCS", "BSCCOMP"],
            semester: 1,
            description: "To provide a foundation in precalculus and calculus for students, building upon their previous knowledge of algebra, geometry, and mathematical functions. The module aims to ensure that students have a strong mastery of critical skills and are exposed to new skills that will be necessary for success in subsequent mathematics courses and other computational courses. A lot of foundation content is provided.",
            prerequisites: [],
            outcomes: [
                "Apply algebraic concepts to solve mathematical problems",
                "Analyze and interpret mathematical functions",
                "Demonstrate understanding of fundamental calculus concepts",
                "Apply calculus techniques to solve basic problems"
            ],
            assessment: "Assignments (20%), Tests (30%), Examination (50%)",
            courseConvener: "Mr. V.B. LUCWABA",
            offeringSite: "NMD"
        },        {
            id: 2,
            code: "MA15M2A",
            name: "PRECALCULUS & CALCULUS II A",
            level: 1,
            credits: 8,
            program: ["BSCMATH", "BSCAMAT", "BSCASCS", "BSCCOMP"],
            semester: 2,
            description: "To continue to build foundation in precalculus and calculus for students, building upon their previous knowledge from MA15M1A. The module aims to continue to provide students with a strong mastery of critical skills and expose them to new skills that will be necessary for success in subsequent mathematics courses and other computational courses.",
            prerequisites: ["MA15M1A"],
            outcomes: [
                "Build on concepts learned in Precalculus & Calculus I A",
                "Apply advanced calculus techniques",
                "Solve complex mathematical problems",
                "Demonstrate deeper understanding of mathematical functions"
            ],
            assessment: "Assignments (20%), Tests (30%), Examination (50%)",
            courseConvener: "Mr. V.B. LUCWABA",
            offeringSite: "NMD"
        },        {
            id: 3,
            code: "AP15M1A",
            name: "INTRODUCTION TO VECTOR AND LINEAR ALGEBRA IA",
            level: 1,
            credits: 8,
            program: ["BSCMATH", "BSCAMAT", "BSCASCS"],
            semester: 1,
            description: "To equip students with the foundational skills and knowledge they need to understand and use linear and vector algebra in a variety of settings, and to apply these concepts and techniques to solve real-world problems.",
            prerequisites: [],
            outcomes: [
                "Understand fundamental concepts of vector algebra",
                "Apply linear algebra techniques to solve problems",
                "Analyze systems of linear equations",
                "Use linear transformations and matrices in various contexts"
            ],
            assessment: "Assignments (15%), Tests (25%), Examination (60%)",
            courseConvener: "Mr. O. YALEZO",
            offeringSite: "NMD"
        },        {
            id: 4,
            code: "AP15M2A",
            name: "INTRODUCTION TO VECTOR AND LINEAR ALGEBRA 2A",
            level: 1,
            credits: 8,
            program: ["BSCMATH", "BSCAMAT", "BSCASCS"],
            semester: 2,
            description: "To continue building on the foundation skills and knowledge started in AP15M1A.",
            prerequisites: ["AP15M1A"],
            outcomes: [
                "Apply advanced vector algebra techniques",
                "Solve complex linear algebra problems",
                "Understand eigenvalues and eigenvectors",
                "Apply linear algebra in multidimensional contexts",
                "Use vector spaces to model real-world problems"
            ],
            assessment: "Assignments (15%), Tests (25%), Examination (60%)",
            courseConvener: "Mr. O. YALEZO",
            offeringSite: "NMD"
        },        {
            id: 5,
            code: "ST15M1A",
            name: "DESCRIPTIVE STATS, PROBABILITY & DISTRIB",
            level: 1,
            credits: 8,
            program: ["BSCASCS", "BSCMATH", "BSCAMAT"],
            semester: 1,
            description: "To equip students with knowledge and skills of statistical descriptions of data, basic probability and probability distribution concepts I.",
            prerequisites: [],
            outcomes: [
                "Apply descriptive statistical methods to analyze data",
                "Understand basic probability concepts",
                "Work with probability distributions",
                "Interpret statistical results",
                "Apply statistical thinking to real-world problems"
            ],
            assessment: "Assignments (20%), Tests (20%), Practicals (10%), Examination (50%)",
            courseConvener: "Mr. A. NCUBE",
            offeringSite: "NMD"
        },        {
            id: 6,
            code: "ST15M2A",
            name: "DESCRIPTIVE STATS, PROBABILITY & DISTRIB",
            level: 1,
            credits: 8,
            program: ["BSCASCS", "BSCMATH", "BSCAMAT"],
            semester: 2,
            description: "To equip students with knowledge and statistical descriptions of data, basic probability and probability distribution concepts II.",
            prerequisites: ["ST15M1A"],
            outcomes: [
                "Apply advanced statistical concepts",
                "Work with complex probability distributions",
                "Perform statistical analysis of large datasets",
                "Use statistical software for data analysis",
                "Communicate statistical results effectively"
            ],
            assessment: "Assignments (20%), Tests (20%), Practicals (10%), Examination (50%)",
            courseConvener: "Mr. A. NCUBE",
            offeringSite: "NMD"
        },        {
            id: 7,
            code: "CK15M0A",
            name: "COMMUNICATION SKILLS",
            level: 1,
            credits: 8,
            program: ["BSCMATH", "BSCAMAT", "BSCASCS", "BSCCOMP"],
            semester: 1,
            description: "To help students develop the skills and confidence they need to communicate effectively about scientific topics, both in written and oral form, and to be able to share their knowledge and expertise with others in a clear and understandable way.",
            prerequisites: [],
            outcomes: [
                "Communicate scientific concepts clearly and effectively",
                "Write academic papers following proper conventions",
                "Present research findings orally with confidence",
                "Apply critical thinking in scientific communication",
                "Develop effective teamwork and collaboration skills"
            ],
            assessment: "Assignments (30%), Presentations (20%), Tests (20%), Examination (30%)",
            courseConvener: "Ms. C. DZAKPASU",
            offeringSite: "NMD"
        },
        {
            id: 8,
            code: "CS15M1A",
            name: "COMPUTER SCIENCE FUNDAMENTALS",
            level: 1,
            credits: 8,
            program: ["BSCCOMP", "BSCASCS", "BSCMATH", "BSCAMAT"],
            semester: 1,
            description: "To equip students with the skills and knowledge they need to understand and use information systems and their applications in a variety of settings.",
            prerequisites: [],
            outcomes: [
                "Understand fundamental computing concepts and principles",
                "Use computer systems effectively for academic purposes",
                "Apply information technology tools to solve problems",
                "Understand data storage and processing concepts",
                "Develop basic computational thinking skills"
            ],
            assessment: "Practical Assignments (30%), Tests (30%), Examination (40%)",
            courseConvener: "Mr. M. PHILIP",
            offeringSite: "NMD"
        },
        {
            id: 9,
            code: "CS15M2A",
            name: "INTRODUCTION TO PROGRAMMING I A",
            level: 1,
            credits: 8,
            program: ["BSCCOMP", "BSCASCS"],
            semester: 2,
            description: "To equip students with a solid foundation in the principles and techniques of problem solving and programming. The much needed foundational knowledge and skills are provided.",
            prerequisites: ["CS15M1A"],
            outcomes: [
                "Apply structured programming concepts",
                "Develop algorithms to solve computational problems",
                "Implement basic data structures",
                "Debug programs effectively",
                "Write well-structured and documented code"
            ],
            assessment: "Practical Assignments (40%), Tests (20%), Final Project (10%), Examination (30%)",
            courseConvener: "Mr. M. PHILIP",
            offeringSite: "NMD"
        },
        {
            id: 10,
            code: "MA15M1B",
            name: "PRECALCULUS & CALCULUS III B",
            level: 2,
            credits: 8,
            program: ["BSCMATH", "BSCAMAT", "BSCASCS"],
            semester: 1,
            description: "To continue to build foundation in precalculus and calculus for students, building upon their previous knowledge from MA15M2A. The module aims to continue to provide students with a strong mastery of critical skills and expose them to new skills that will be necessary for success in subsequent mathematics courses and other computational courses.",
            prerequisites: ["MA15M2A"],
            outcomes: [
                "Apply advanced calculus techniques",
                "Solve problems involving differential equations",
                "Work with multivariable functions",
                "Apply calculus concepts to real-world problems",
                "Understand mathematical modeling using calculus"
            ],
            assessment: "Assignments (20%), Tests (30%), Examination (50%)",
            courseConvener: "Ms. N. THOMAS",
            offeringSite: "NMD"
        }
    ];

    const filterModules = () => {
        return modules.filter(module => {
            // Filter by program
            if (selectedProgram !== 'all' && !module.program.includes(selectedProgram)) {
                return false;
            }
            
            // Filter by level
            if (selectedLevel > 0 && module.level !== selectedLevel) {
                return false;
            }
            
            // Filter by semester
            if (selectedSemester > 0 && module.semester !== selectedSemester) {
                return false;
            }
            
            // Filter by search query
            if (searchQuery) {
                const query = searchQuery.toLowerCase();
                return (
                    module.code.toLowerCase().includes(query) ||
                    module.name.toLowerCase().includes(query) ||
                    module.description.toLowerCase().includes(query)
                );
            }
            
            return true;
        });
    };

    const uniquePrograms = Array.from(new Set(modules.flatMap(module => module.program)));
    const maxLevel = Math.max(...modules.map(module => module.level));

    const toggleModuleExpansion = (id: number) => {
        setExpandedModule(expandedModule === id ? null : id);
    };

    const getProgramName = (code: string) => {
        switch (code) {
            case 'BSCMATH': return 'BSc in Mathematics';
            case 'BSCAMAT': return 'BSc in Applied Mathematics';
            case 'BSCASCS': return 'BSc in Applied Statistical Science';
            case 'BSCCOMP': return 'BSc in Computer Science';
            default: return code;
        }
    };

    const filteredModules = filterModules();

    return (
        <div className="course-modules">
            <h2>Course Modules</h2>
            <p className="modules-intro">
                Our department offers a comprehensive range of course modules across different levels of study. 
                Use the filters below to explore modules by program, year level, and semester.
            </p>
            
            <div className="modules-filter">
                <div className="filter-group">
                    <label>Program:</label>
                    <select 
                        value={selectedProgram} 
                        onChange={(e) => setSelectedProgram(e.target.value)}
                    >
                        <option value="all">All Programs</option>
                        {uniquePrograms.map(program => (
                            <option key={program} value={program}>{getProgramName(program)}</option>
                        ))}
                    </select>
                </div>
                
                <div className="filter-group">
                    <label>Year Level:</label>
                    <select 
                        value={selectedLevel} 
                        onChange={(e) => setSelectedLevel(parseInt(e.target.value, 10))}
                    >
                        <option value={0}>All Levels</option>
                        {Array.from({length: maxLevel}, (_, i) => i + 1).map(level => (
                            <option key={level} value={level}>Year {level}</option>
                        ))}
                    </select>
                </div>
                
                <div className="filter-group">
                    <label>Semester:</label>
                    <select 
                        value={selectedSemester} 
                        onChange={(e) => setSelectedSemester(parseInt(e.target.value, 10))}
                    >
                        <option value={0}>All Semesters</option>
                        <option value={1}>Semester 1</option>
                        <option value={2}>Semester 2</option>
                    </select>
                </div>
                
                <div className="filter-group search-group">
                    <input 
                        type="text" 
                        placeholder="Search modules..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>
            
            <div className="modules-count">
                <span>{filteredModules.length} modules found</span>
            </div>
            
            <div className="modules-list">
                {filteredModules.map(module => (
                    <div 
                        key={module.id} 
                        className={`module-card ${expandedModule === module.id ? 'expanded' : ''}`}
                    >
                        <div className="module-header" onClick={() => toggleModuleExpansion(module.id)}>
                            <div className="module-code">{module.code}</div>
                            <div className="module-main">
                                <h3>{module.name}</h3>
                                <div className="module-meta">
                                    <span><i className="fas fa-layer-group"></i> Year {module.level}</span>
                                    <span><i className="fas fa-calendar"></i> Semester {module.semester}</span>
                                    <span><i className="fas fa-award"></i> {module.credits} Credits</span>
                                </div>
                            </div>
                            <div className="module-toggle">
                                <i className={`fas fa-chevron-${expandedModule === module.id ? 'up' : 'down'}`}></i>
                            </div>
                        </div>
                        
                        {expandedModule === module.id && (
                            <div className="module-details">
                                <div className="detail-section">
                                    <h4>Description</h4>
                                    <p>{module.description}</p>
                                </div>
                                
                                <div className="detail-section">
                                    <h4>Programs</h4>
                                    <div className="programs-tags">
                                        {module.program.map((program, index) => (
                                            <span key={index} className="program-tag">{getProgramName(program)}</span>
                                        ))}
                                    </div>
                                </div>
                                
                                {module.prerequisites.length > 0 && (
                                    <div className="detail-section">
                                        <h4>Prerequisites</h4>
                                        <div className="prerequisites-list">
                                            {module.prerequisites.map((prereq, index) => (
                                                <span key={index} className="prerequisite-tag">{prereq}</span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                
                                <div className="detail-section">
                                    <h4>Learning Outcomes</h4>
                                    <ul className="outcomes-list">
                                        {module.outcomes.map((outcome, index) => (
                                            <li key={index}>{outcome}</li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <div className="detail-section">
                                    <h4>Assessment</h4>
                                    <p>{module.assessment}</p>
                                </div>
                                
                                <div className="module-actions">
                                    <button className="btn-select-module">
                                        <i className="fas fa-plus-circle"></i> Select This Module
                                    </button>
                                    <button className="btn-module-details">
                                        <i className="fas fa-file-alt"></i> Module Outline
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
                
                {filteredModules.length === 0 && (
                    <div className="no-modules-found">
                        <i className="fas fa-search"></i>
                        <p>No modules match your search criteria. Try adjusting your filters.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CourseModules;
