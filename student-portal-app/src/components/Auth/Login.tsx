import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faSignInAlt, faSpinner, faExclamationTriangle, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import './Auth.css';

const Login: React.FC = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
        if (error) setError('');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        setSuccessMessage('');

        try {
            const response = await fetch('http://localhost:3000/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password
                }),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('user', JSON.stringify(data.user));
                if (formData.rememberMe) {
                    localStorage.setItem('rememberUser', 'true');
                }
                console.log('User:', data.user);
                setSuccessMessage('Login successful! Redirecting...');
                setTimeout(() => {
                    setSuccessMessage('');
                    navigate('/');
                }, 2000);
            } else {
                setError(data.error || 'Login failed');
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
                        Welcome Back
                    </motion.h1>
                    
                    <motion.p 
                        className="auth-subtitle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        Sign in to access your WSU account
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

                {successMessage && (
                    <motion.div 
                        className="success-message"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                    >
                        <span>{successMessage}</span>
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
                                className="form-control"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="student@wsu.ac.za"
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <div className="input-icon-wrapper">
                            <FontAwesomeIcon icon={faLock} className="icon" />
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="form-control"
                                value={formData.password}
                                onChange={handleInputChange}
                                placeholder="Enter your password"
                            />
                        </div>
                    </div>

                    <div className="remember-me">
                        <input
                            id="rememberMe"
                            name="rememberMe"
                            type="checkbox"
                            checked={formData.rememberMe}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="rememberMe">Remember me</label>
                    </div>

                    <motion.button
                        type="submit"
                        className="auth-button"
                        disabled={isLoading}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        {isLoading ? (
                            <>
                                <FontAwesomeIcon icon={faSpinner} spin />
                                <span style={{ marginLeft: '8px' }}>Signing in...</span>
                            </> 
                        ) : (
                            <>
                                <FontAwesomeIcon icon={faSignInAlt} />
                                <span style={{ marginLeft: '8px' }}>Sign In</span>
                            </> 
                        )}
                    </motion.button>
                    
                    <div className="auth-links">
                        <Link to="/forgot-password">Forgot password?</Link>
                        <div className="auth-divider">or</div>
                        <p>
                            Don't have an account? <Link to="/signup">Sign up</Link>
                        </p>
                    </div>
                </motion.form>
            </motion.div>
        </div>
    );
};

export default Login;
