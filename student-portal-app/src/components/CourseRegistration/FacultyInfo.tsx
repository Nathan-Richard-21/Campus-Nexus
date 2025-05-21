import React, { useState } from 'react';
import './FacultyInfo.css';

interface FacultyMember {
    id: number;
    name: string;
    position: string;
    department: string;
    email: string;
    phone: string;
    office: string;
    icon: string;
    iconColor: string;
    specialization: string[];
    bio: string;
}

const FacultyInfo: React.FC = () => {
    const [selectedFaculty, setSelectedFaculty] = useState<FacultyMember | null>(null);
    const [filterCategory, setFilterCategory] = useState<string>('all');

    const facultyMembers: FacultyMember[] = [
        {
            id: 1,
            name: "Dr. Thando Mabena",
            position: "Head of Department",
            department: "Mathematics and Computing",
            email: "tmabena@wsu.ac.za",
            phone: "047-502-2365",
            office: "Block A, Room 201",
            icon: "fa-square-root-variable",
            iconColor: "#3550d8",
            specialization: ["Applied Mathematics", "Mathematical Modeling"],
            bio: "Dr. Mabena has over 15 years of experience in mathematical modeling and its applications in industry. He leads the department's research initiatives and has published extensively in international journals."
        },
        {
            id: 2,
            name: "Prof. Sarah Ndlovu",
            position: "Professor",
            department: "Mathematics and Computing",
            email: "sndlovu@wsu.ac.za",
            phone: "047-502-2366",
            office: "Block A, Room 203",
            icon: "fa-chart-line",
            iconColor: "#e74c3c",
            specialization: ["Statistics", "Data Science", "Machine Learning"],
            bio: "Prof. Ndlovu is a leading expert in statistical analysis and data science. Her research focuses on developing statistical methods for big data and machine learning applications."
        },
        {
            id: 3,
            name: "Dr. John Dlamini",
            position: "Senior Lecturer",
            department: "Mathematics and Computing",
            email: "jdlamini@wsu.ac.za",
            phone: "047-502-2370",
            office: "Block A, Room 210",
            icon: "fa-robot",
            iconColor: "#2980b9",
            specialization: ["Computer Science", "Artificial Intelligence", "Programming"],
            bio: "Dr. Dlamini specializes in artificial intelligence and programming. He leads several research projects in machine learning and has developed innovative teaching methods for programming courses."
        },
        {
            id: 4,
            name: "Dr. Nomsa Khumalo",
            position: "Lecturer",
            department: "Mathematics and Computing",
            email: "nkhumalo@wsu.ac.za",
            phone: "047-502-2375",
            office: "Block A, Room 215",
            icon: "fa-infinity",
            iconColor: "#9b59b6",
            specialization: ["Pure Mathematics", "Mathematical Analysis"],
            bio: "Dr. Khumalo's research interests include mathematical analysis and abstract algebra. She is passionate about making complex mathematical concepts accessible to students."
        },
        {
            id: 5,
            name: "Mr. David Zuma",
            position: "Lecturer",
            department: "Mathematics and Computing",
            email: "dzuma@wsu.ac.za",
            phone: "047-502-2380",
            office: "Block A, Room 218",
            icon: "fa-network-wired",
            iconColor: "#27ae60",
            specialization: ["Computer Networks", "Cybersecurity"],
            bio: "Mr. Zuma brings industry experience in computer networks and cybersecurity to his teaching. He is currently pursuing his PhD in network security."
        },
        {
            id: 6,
            name: "Ms. Lindiwe Molefe",
            position: "Associate Lecturer",
            department: "Mathematics and Computing",
            email: "lmolefe@wsu.ac.za",
            phone: "047-502-2385",
            office: "Block A, Room 220",
            icon: "fa-code",
            iconColor: "#f39c12",
            specialization: ["Programming", "Web Development", "Mobile Applications"],
            bio: "Ms. Molefe is an expert in web and mobile application development. She coordinates the department's practical programming courses and industry partnerships."
        },
        {
            id: 7,
            name: "Dr. Sipho Maluleke",
            position: "Senior Lecturer",
            department: "Mathematics and Computing",
            email: "smaluleke@wsu.ac.za",
            phone: "047-502-2390",
            office: "Block B, Room 105",
            icon: "fa-bezier-curve",
            iconColor: "#16a085",
            specialization: ["Operations Research", "Optimization"],
            bio: "Dr. Maluleke's research focuses on operations research and optimization techniques. He collaborates with various industries to apply mathematical optimization to real-world problems."
        },
        {
            id: 8,
            name: "Mrs. Joyce Mbeki",
            position: "Department Administrator",
            department: "Mathematics and Computing",
            email: "jmbeki@wsu.ac.za",
            phone: "047-502-2360",
            office: "Block A, Room 200",
            icon: "fa-clipboard-list",
            iconColor: "#8e44ad",
            specialization: ["Administration", "Student Affairs"],
            bio: "Mrs. Mbeki oversees all administrative aspects of the department. She is the first point of contact for student inquiries and manages the department's day-to-day operations."
        }
    ];

    const getSpecializationCategories = () => {
        const allSpecializations: string[] = [];
        facultyMembers.forEach(member => {
            member.specialization.forEach(spec => {
                if (!allSpecializations.includes(spec)) {
                    allSpecializations.push(spec);
                }
            });
        });
        return allSpecializations.sort();
    };

    const filteredFaculty = filterCategory === 'all' 
        ? facultyMembers 
        : facultyMembers.filter(member => 
            member.specialization.includes(filterCategory)
          );

    return (
        <div className="faculty-info">
            <h2>Faculty & Staff</h2>
            <p className="faculty-intro">
                Our department is proud to have a diverse team of experienced faculty members and dedicated staff. 
                Each brings unique expertise and a commitment to excellence in teaching, research, and service.
            </p>

            <div className="filter-container">
                <label>Filter by Specialization:</label>
                <div className="filter-buttons">
                    <button 
                        className={filterCategory === 'all' ? 'active' : ''} 
                        onClick={() => setFilterCategory('all')}>
                        All
                    </button>
                    {getSpecializationCategories().map(category => (
                        <button 
                            key={category}
                            className={filterCategory === category ? 'active' : ''} 
                            onClick={() => setFilterCategory(category)}>
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            <div className="faculty-grid">
                {filteredFaculty.map(member => (
                    <div 
                        key={member.id} 
                        className="faculty-card"
                        onClick={() => setSelectedFaculty(member)}
                    >
                        <div className="faculty-icon-container">
                            <i className={`fas ${member.icon}`} style={{color: member.iconColor}}></i>
                        </div>
                        <div className="faculty-details">
                            <h3>{member.name}</h3>
                            <p className="position">{member.position}</p>
                            <div className="specialization-tags">
                                {member.specialization.slice(0, 2).map((spec, index) => (
                                    <span key={index} className="specialization-tag">{spec}</span>
                                ))}
                                {member.specialization.length > 2 && <span className="more-tag">+{member.specialization.length - 2}</span>}
                            </div>
                            <button className="view-profile-btn">View Profile</button>
                        </div>
                    </div>
                ))}
            </div>

            {selectedFaculty && (
                <div className="faculty-modal-overlay" onClick={() => setSelectedFaculty(null)}>
                    <div className="faculty-modal" onClick={e => e.stopPropagation()}>
                        <button className="close-modal" onClick={() => setSelectedFaculty(null)}>×</button>
                        <div className="modal-content">
                            <div className="modal-icon">
                                <i className={`fas ${selectedFaculty.icon}`} style={{color: selectedFaculty.iconColor}}></i>
                            </div>
                            <div className="modal-details">
                                <h2>{selectedFaculty.name}</h2>
                                <p className="modal-position">{selectedFaculty.position}</p>
                                
                                <div className="modal-contact-info">
                                    <div className="contact-item">
                                        <i className="fas fa-envelope"></i>
                                        <span>{selectedFaculty.email}</span>
                                    </div>
                                    <div className="contact-item">
                                        <i className="fas fa-phone"></i>
                                        <span>{selectedFaculty.phone}</span>
                                    </div>
                                    <div className="contact-item">
                                        <i className="fas fa-building"></i>
                                        <span>{selectedFaculty.office}</span>
                                    </div>
                                </div>
                                
                                <div className="modal-bio">
                                    <h3>Biography</h3>
                                    <p>{selectedFaculty.bio}</p>
                                </div>
                                
                                <div className="modal-specialization">
                                    <h3>Areas of Specialization</h3>
                                    <div className="spec-tags">
                                        {selectedFaculty.specialization.map((spec, index) => (
                                            <span key={index} className="spec-tag">{spec}</span>
                                        ))}
                                    </div>
                                </div>
                                
                                <div className="modal-actions">
                                    <button className="action-btn">
                                        <i className="fas fa-calendar"></i> Schedule Meeting
                                    </button>
                                    <button className="action-btn">
                                        <i className="fas fa-envelope"></i> Send Email
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FacultyInfo;
