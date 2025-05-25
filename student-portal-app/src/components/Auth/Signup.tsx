import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faEnvelope, 
    faLock, 
    faUser, 
    faUserPlus, 
    faSpinner, 
    faExclamationTriangle,
    faGraduationCap,
    faCheckCircle
} from '@fortawesome/free-solid-svg-icons';
import './Auth.css';

const Signup: React.FC = () => {
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [validationErrors, setValidationErrors] = useState<{[key: string]: string}>({});
    const navigate = useNavigate();

    const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validatePassword = (password: string) => password.length >= 6;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        const newErrors = { ...validationErrors };
        if (name === 'email' && value) {
            if (!validateEmail(value)) newErrors.email = 'Please enter a valid email address';
            else delete newErrors.email;
        }
        if (name === 'password' && value) {
            if (!validatePassword(value)) newErrors.password = 'Password must be at least 6 characters long';
            else delete newErrors.password;
        }
        if (name === 'confirmPassword' && value) {
            if (value !== formData.password) newErrors.confirmPassword = 'Passwords do not match';
            else delete newErrors.confirmPassword;
        }
        if (name === 'username' && value) {
            if (value.length < 3) newErrors.username = 'Username must be at least 3 characters long';
            else delete newErrors.username;
        }
        setValidationErrors(newErrors);
        if (error) setError('');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match.');
            setIsLoading(false);
            return;
        }
        if (!formData.email || !formData.username || !formData.password) {
            setError('All fields are required.');
            setIsLoading(false);
            return;
        }
        if (!validateEmail(formData.email)) {
            setError('Please enter a valid email address.');
            setIsLoading(false);
            return;
        }
        if (!validatePassword(formData.password)) {
            setError('Password must be at least 6 characters long.');
            setIsLoading(false);
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: formData.username,
                    email: formData.email,
                    password: formData.password
                })
            });
            const data = await response.json();
            if (response.ok) {
                navigate('/login');
            } else {
                setError(data.error || 'Registration failed');
            }
        } catch (error) {
            console.error('Error:', error);
            setError('Connection error. Please check if the server is running.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="auth-container">
            <motion.div 
                className="auth-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <div className="auth-header">
                    <motion.div 
                        className="auth-logo"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
                    >
                        <div className="logo-text">
                            <FontAwesomeIcon icon={faGraduationCap} /> CampusNexus
                        </div>
                    </motion.div>
                    
                    <motion.h1 
                        className="auth-title"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        Create Account
                    </motion.h1>
                    
                    <motion.p 
                        className="auth-subtitle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        Join the WSU digital campus community
                    </motion.p>
                </div>

                {error && (
                    <motion.div 
                        className="error-message"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                    >
                        <FontAwesomeIcon icon={faExclamationTriangle} />
                        <span>{error}</span>
                    </motion.div>
                )}

                <motion.form 
                    onSubmit={handleSubmit} 
                    className="auth-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <div className="input-icon-wrapper">
                            <FontAwesomeIcon icon={faEnvelope} className="icon" />
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={formData.email}
                                onChange={handleInputChange}
                                className={`form-control ${validationErrors.email ? 'is-invalid' : ''}`}
                                placeholder="student@wsu.ac.za"
                            />
                        </div>
                        {validationErrors.email && (
                            <div className="text-danger">{validationErrors.email}</div>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <div className="input-icon-wrapper">
                            <FontAwesomeIcon icon={faUser} className="icon" />
                            <input
                                id="username"
                                name="username"
                                type="text"
                                autoComplete="username"
                                required
                                value={formData.username}
                                onChange={handleInputChange}
                                className={`form-control ${validationErrors.username ? 'is-invalid' : ''}`}
                                placeholder="Choose a username"
                            />
                        </div>
                        {validationErrors.username && (
                            <div className="text-danger">{validationErrors.username}</div>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <div className="input-icon-wrapper">
                            <FontAwesomeIcon icon={faLock} className="icon" />
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="new-password"
                                required
                                value={formData.password}
                                onChange={handleInputChange}
                                className={`form-control ${validationErrors.password ? 'is-invalid' : ''}`}
                                placeholder="Min. 6 characters"
                            />
                        </div>
                        {validationErrors.password && (
                            <div className="text-danger">{validationErrors.password}</div>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <div className="input-icon-wrapper">
                            <FontAwesomeIcon icon={faLock} className="icon" />
                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                autoComplete="new-password"
                                required
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                className={`form-control ${validationErrors.confirmPassword ? 'is-invalid' : ''}`}
                                placeholder="Confirm your password"
                            />
                        </div>
                        {validationErrors.confirmPassword && (
                            <div className="text-danger">{validationErrors.confirmPassword}</div>
                        )}
                    </div>

                    <motion.button
                        type="submit"
                        className="auth-button"
                        disabled={isLoading || Object.keys(validationErrors).length > 0}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        {isLoading ? (
                            <>
                                <FontAwesomeIcon icon={faSpinner} spin />
                                <span style={{ marginLeft: '8px' }}>Creating account...</span>
                            </>
                        ) : (
                            <>
                                <FontAwesomeIcon icon={faUserPlus} />
                                <span style={{ marginLeft: '8px' }}>Sign Up</span>
                            </>
                        )}
                    </motion.button>

                    <div className="auth-links">
                        <div className="auth-divider">or</div>
                        <p>
                            Already have an account? <Link to="/login">Sign in</Link>
                        </p>
                    </div>
                </motion.form>
            </motion.div>
        </div>
    );
};

export default Signup;
