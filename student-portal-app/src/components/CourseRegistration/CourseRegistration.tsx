import React, { useState } from 'react';

const CourseRegistration: React.FC = () => {
    const [courses, setCourses] = useState<string[]>([]);
    const [selectedCourse, setSelectedCourse] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const handleCourseChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCourse(event.target.value);
    };

    const handleRegister = () => {
        if (selectedCourse) {
            setCourses([...courses, selectedCourse]);
            setMessage(`Successfully registered for ${selectedCourse}`);
            setSelectedCourse('');
        } else {
            setMessage('Please select a course to register.');
        }
    };

    const handleRemove = (course: string) => {
        setCourses(courses.filter(c => c !== course));
        setMessage(`Successfully removed ${course}`);
    };

    return (
        <div className="course-registration">
            <h2>Course Registration</h2>
            <select value={selectedCourse} onChange={handleCourseChange}>
                <option value="">Select a course</option>
                <option value="Course 1">Course 1</option>
                <option value="Course 2">Course 2</option>
                <option value="Course 3">Course 3</option>
            </select>
            <button onClick={handleRegister}>Register</button>
            <h3>Registered Courses:</h3>
            <ul>
                {courses.map(course => (
                    <li key={course}>
                        {course} <button onClick={() => handleRemove(course)}>Remove</button>
                    </li>
                ))}
            </ul>
            {message && <p>{message}</p>}
        </div>
    );
};

export default CourseRegistration;