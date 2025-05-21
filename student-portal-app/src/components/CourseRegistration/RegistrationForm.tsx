import React, { useState, useEffect } from 'react';
import './RegistrationForm.css';

interface RegistrationFormProps {
    registeredCourses: string[];
    onRegister: (course: string) => void;
    onRemove: (course: string) => void;
    message: string;
}

interface CourseModule {
    id: number;
    code: string;
    name: string;
    credits: number;
    level: number;
    semester: number;
    prerequisites: string[];
    program: string;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ 
    registeredCourses, 
    onRegister, 
    onRemove,
    message 
}) => {
    const [selectedProgram, setSelectedProgram] = useState<string>('');
    const [selectedCourseCode, setSelectedCourseCode] = useState<string>('');
    const [studentNumber, setStudentNumber] = useState<string>('');
    const [studentName, setStudentName] = useState<string>('');
    const [selectedYear, setSelectedYear] = useState<string>('1');
    const [showRequirements, setShowRequirements] = useState<boolean>(false);
    
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [registrationComplete, setRegistrationComplete] = useState<boolean>(false);
    const [validationErrors, setValidationErrors] = useState<{[key: string]: string}>({});
    
    const totalCredits = 120; // Mock total credits needed
    const registeredCredits = registeredCourses.length * 15; // Mock calculation (15 credits per course)
    
    // Mock course modules data
    const courseModules: CourseModule[] = [
        { id: 1, code: 'MAT1541', name: 'Mathematics I', credits: 16, level: 1, semester: 1, prerequisites: [], program: 'BSc in Mathematics' },
        { id: 2, code: 'MAT1642', name: 'Mathematics II', credits: 16, level: 1, semester: 2, prerequisites: ['MAT1541'], program: 'BSc in Mathematics' },
        { id: 3, code: 'STA1541', name: 'Introduction to Statistics', credits: 16, level: 1, semester: 1, prerequisites: [], program: 'BSc in Applied Statistical Science' },
        { id: 4, code: 'CSC1541', name: 'Introduction to Programming', credits: 16, level: 1, semester: 1, prerequisites: [], program: 'BSc in Computer Science' },
        { id: 5, code: 'CSC1642', name: 'Object-Oriented Programming', credits: 16, level: 1, semester: 2, prerequisites: ['CSC1541'], program: 'BSc in Computer Science' },
        { id: 6, code: 'MAT2541', name: 'Linear Algebra', credits: 16, level: 2, semester: 1, prerequisites: ['MAT1642'], program: 'BSc in Mathematics' },
        { id: 7, code: 'STA2541', name: 'Statistical Methods', credits: 16, level: 2, semester: 1, prerequisites: ['STA1541', 'MAT1541'], program: 'BSc in Applied Statistical Science' },
        { id: 8, code: 'CSC2541', name: 'Data Structures and Algorithms', credits: 16, level: 2, semester: 1, prerequisites: ['CSC1642'], program: 'BSc in Computer Science' },
    ];
    
    const programs = [
        { id: 1, code: 'BSCMATH', name: 'BSc in Mathematics' },
        { id: 2, code: 'BSCAMAT', name: 'BSc in Applied Mathematics' },
        { id: 3, code: 'BSCASCS', name: 'BSc in Applied Statistical Science' },
        { id: 4, code: 'BSCCOMP', name: 'BSc in Computer Science' },
    ];
    
    useEffect(() => {
        // Reset validation errors when input changes
        setValidationErrors({});
    }, [studentNumber, studentName, selectedProgram]);
    
    const validateForm = () => {
        const errors: {[key: string]: string} = {};
        
        if (!studentNumber) {
            errors.studentNumber = "Student number is required";
        } else if (!/^\d{8}$/.test(studentNumber)) {
            errors.studentNumber = "Student number must be 8 digits";
        }
        
        if (!studentName) {
            errors.studentName = "Full name is required";
        }
        
        if (!selectedProgram) {
            errors.program = "Please select a program";
        }
        
        setValidationErrors(errors);
        return Object.keys(errors).length === 0;
    };
    
    const handleRegister = () => {
        if (selectedCourseCode) {
            const course = courseModules.find(course => course.code === selectedCourseCode);
            if (course) {
                onRegister(`${course.code} - ${course.name}`);
                setSelectedCourseCode('');
            }
        }
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }
        
        if (registeredCourses.length === 0) {
            setValidationErrors({
                courses: "You must select at least one course"
            });
            return;
        }
        
        setIsSubmitting(true);
        
        // Simulate API call with timeout
        setTimeout(() => {
            setIsSubmitting(false);
            setRegistrationComplete(true);
        }, 2000);
    };
    
    const filteredCourses = selectedProgram
        ? courseModules.filter(
            course => course.program === selectedProgram && 
            course.level.toString() === selectedYear
          )
        : [];
        
    // Check if a course has unmet prerequisites
    const hasUnmetPrerequisites = (course: CourseModule) => {
        if (course.prerequisites.length === 0) return false;
        
        return !course.prerequisites.every(prereq => 
            registeredCourses.some(regCourse => regCourse.includes(prereq))
        );
    };
    
    return (
        <div className="registration-form">
            <h2>Course Registration</h2>
            
            {!registrationComplete ? (
                <div className="registration-container">
                    <div className="requirements-panel">
                        <div className="requirements-header" onClick={() => setShowRequirements(!showRequirements)}>
                            <h3>Registration Requirements</h3>
                            <i className={`fas fa-chevron-${showRequirements ? 'up' : 'down'}`}></i>
                        </div>
                        
                        <div className={`requirements-content ${showRequirements ? 'show' : ''}`}>
                            <p>To complete your registration, please ensure you have:</p>
                            <ul>
                                <li><i className="fas fa-check"></i> Valid student number</li>
                                <li><i className="fas fa-check"></i> Selected your program of study</li>
                                <li><i className="fas fa-check"></i> Selected courses for the current academic year</li>
                                <li><i className="fas fa-check"></i> Met all prerequisite requirements for selected courses</li>
                                <li><i className="fas fa-check"></i> Registered for the required number of credits (min: 60 per semester)</li>
                            </ul>
                            
                            <div className="info-box">
                                <i className="fas fa-info-circle"></i>
                                <p>Need help with registration? Contact the Department Administrator at <strong>mathcompdept@wsu.ac.za</strong></p>
                            </div>
                        </div>
                    </div>
                    
                    <form onSubmit={handleSubmit}>
                        <div className="form-section">
                            <h3>Student Information</h3>
                            <div className="form-group">
                                <label htmlFor="studentNumber">Student Number</label>
                                <input
                                    type="text"
                                    id="studentNumber"
                                    value={studentNumber}
                                    onChange={(e) => setStudentNumber(e.target.value)}
                                    placeholder="Enter your 8-digit student number"
                                    className={validationErrors.studentNumber ? 'error' : ''}
                                />
                                {validationErrors.studentNumber && (
                                    <div className="error-message">{validationErrors.studentNumber}</div>
                                )}
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="studentName">Full Name</label>
                                <input
                                    type="text"
                                    id="studentName"
                                    value={studentName}
                                    onChange={(e) => setStudentName(e.target.value)}
                                    placeholder="Enter your full name"
                                    className={validationErrors.studentName ? 'error' : ''}
                                />
                                {validationErrors.studentName && (
                                    <div className="error-message">{validationErrors.studentName}</div>
                                )}
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="program">Program of Study</label>
                                <select
                                    id="program"
                                    value={selectedProgram}
                                    onChange={(e) => setSelectedProgram(e.target.value)}
                                    className={validationErrors.program ? 'error' : ''}
                                >
                                    <option value="">Select your program</option>
                                    {programs.map(program => (
                                        <option key={program.id} value={program.name}>{program.name}</option>
                                    ))}
                                </select>
                                {validationErrors.program && (
                                    <div className="error-message">{validationErrors.program}</div>
                                )}
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="year">Year of Study</label>
                                <select
                                    id="year"
                                    value={selectedYear}
                                    onChange={(e) => setSelectedYear(e.target.value)}
                                >
                                    <option value="1">First Year</option>
                                    <option value="2">Second Year</option>
                                    <option value="3">Third Year</option>
                                </select>
                            </div>
                        </div>
                        
                        <div className="form-section">
                            <h3>Course Selection</h3>
                            {!selectedProgram ? (
                                <div className="placeholder-message">
                                    <i className="fas fa-info-circle"></i>
                                    <p>Please select a program to view available courses</p>
                                </div>
                            ) : filteredCourses.length === 0 ? (
                                <div className="placeholder-message">
                                    <i className="fas fa-exclamation-circle"></i>
                                    <p>No courses available for the selected program and year</p>
                                </div>
                            ) : (
                                <div className="course-selection">
                                    <div className="form-group">
                                        <label htmlFor="courseCode">Select Course</label>
                                        <select
                                            id="courseCode"
                                            value={selectedCourseCode}
                                            onChange={(e) => setSelectedCourseCode(e.target.value)}
                                        >
                                            <option value="">Select a course</option>
                                            {filteredCourses.map(course => (
                                                <option 
                                                    key={course.id} 
                                                    value={course.code}
                                                    disabled={registeredCourses.some(c => c.includes(course.code)) || hasUnmetPrerequisites(course)}
                                                >
                                                    {course.code} - {course.name} ({course.credits} credits)
                                                    {registeredCourses.some(c => c.includes(course.code)) ? ' - Already registered' : ''}
                                                    {hasUnmetPrerequisites(course) ? ' - Prerequisites not met' : ''}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    
                                    <button 
                                        type="button" 
                                        onClick={handleRegister} 
                                        className="btn-add-course"
                                        disabled={!selectedCourseCode}
                                    >
                                        <i className="fas fa-plus"></i> Add Course
                                    </button>
                                </div>
                            )}
                            
                            {validationErrors.courses && (
                                <div className="error-message">{validationErrors.courses}</div>
                            )}
                            
                            <div className="registered-courses">
                                <h4>Selected Courses</h4>
                                
                                {registeredCourses.length === 0 ? (
                                    <div className="no-courses">
                                        <p>No courses selected yet</p>
                                    </div>
                                ) : (
                                    <div className="course-list">
                                        {registeredCourses.map((course, index) => (
                                            <div key={index} className="course-item">
                                                <span>{course}</span>
                                                <button type="button" onClick={() => onRemove(course)}>
                                                    <i className="fas fa-times"></i>
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                
                                <div className="credits-counter">
                                    <div className="credits-info">
                                        <span>Credits Selected:</span>
                                        <span className="credits-value">{registeredCredits} / {totalCredits}</span>
                                    </div>
                                    <div className="credits-progress">
                                        <div 
                                            className="credits-bar" 
                                            style={{ width: `${Math.min(100, (registeredCredits / totalCredits) * 100)}%` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {message && (
                            <div className={`message ${message.includes('Successfully') ? 'success' : 'error'}`}>
                                {message}
                            </div>
                        )}
                        
                        <div className="form-actions">
                            <button type="button" className="btn-reset">
                                <i className="fas fa-redo"></i> Reset Form
                            </button>
                            <button 
                                type="submit" 
                                className="btn-submit"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <i className="fas fa-spinner fa-spin"></i> Processing...
                                    </>
                                ) : (
                                    <>
                                        <i className="fas fa-check-circle"></i> Complete Registration
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            ) : (
                <div className="registration-success">
                    <div className="success-icon">
                        <i className="fas fa-check-circle"></i>
                    </div>
                    <h3>Registration Successful!</h3>
                    <p>Your course registration for the Mathematics and Computing Department has been submitted successfully.</p>
                    
                    <div className="registration-summary">
                        <h4>Registration Summary</h4>
                        <div className="summary-info">
                            <div className="summary-row">
                                <span className="label">Student Number:</span>
                                <span className="value">{studentNumber}</span>
                            </div>
                            <div className="summary-row">
                                <span className="label">Name:</span>
                                <span className="value">{studentName}</span>
                            </div>
                            <div className="summary-row">
                                <span className="label">Program:</span>
                                <span className="value">{selectedProgram}</span>
                            </div>
                            <div className="summary-row">
                                <span className="label">Year of Study:</span>
                                <span className="value">Year {selectedYear}</span>
                            </div>
                            <div className="summary-row">
                                <span className="label">Courses:</span>
                                <span className="value">{registeredCourses.length} courses ({registeredCredits} credits)</span>
                            </div>
                        </div>
                        
                        <div className="course-summary">
                            <h5>Registered Courses</h5>
                            <ul>
                                {registeredCourses.map((course, index) => (
                                    <li key={index}>{course}</li>
                                ))}
                            </ul>
                        </div>
                        
                        <div className="next-steps">
                            <h4>Next Steps</h4>
                            <ol>
                                <li>Check your university email for a confirmation of your registration.</li>
                                <li>Visit the finance office to complete any outstanding fee payments.</li>
                                <li>Attend the orientation session for your selected courses.</li>
                                <li>Download your class schedule from the student portal.</li>
                            </ol>
                        </div>
                        
                        <div className="action-buttons">
                            <button className="btn-secondary">
                                <i className="fas fa-print"></i> Print Summary
                            </button>
                            <button className="btn-primary">
                                <i className="fas fa-envelope"></i> Email Confirmation
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RegistrationForm;
