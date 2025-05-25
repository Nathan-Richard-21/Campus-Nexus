import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './HomePage.css';

const HomePage: React.FC = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const statsRef = useRef<HTMLDivElement>(null);
    const [countersStarted, setCountersStarted] = useState(false);

    const testimonials = [
        {
            text: "Walter Sisulu University has transformed my life. The support from lecturers and the amazing resources available helped me excel in my studies and secure an internship at a leading company.",
            name: "Thabo Ngwenya",
            role: "Final Year BComm Student",
            avatar: "https://via.placeholder.com/60?text=TN"
        },
        {
            text: "The bursary program at WSU made my education possible. I'm forever grateful for the opportunities I've received here and the friends I've made along the way.",
            name: "Nomfundo Mthembu",
            role: "Engineering Graduate",
            avatar: "https://via.placeholder.com/60?text=NM"
        },
        {
            text: "The campus navigation app helped me tremendously as a first-year student. The food ordering service is also convenient when I'm studying late at the library.",
            name: "Siyabonga Dlamini",
            role: "Computer Science Student",
            avatar: "https://via.placeholder.com/60?text=SD"
        }
    ];

    const stats = [
        { value: 33000, label: "Students", suffix: "+" },
        { value: 4, label: "Campuses", suffix: "" },
        { value: 98, label: "Programs", suffix: "+" },
        { value: 85, label: "Graduate Rate", suffix: "%" }
    ];

    const news = [
        {
            title: "Registration for Second Semester Now Open",
            date: "May 18, 2025",
            excerpt: "All students are advised to register for the second semester before the deadline. Online registration is available through the student portal.",
            image: "https://via.placeholder.com/400x250?text=Registration"
        },
        {
            title: "Annual Career Fair Coming Next Week",
            date: "May 20, 2025",
            excerpt: "Over 50 companies will be present at the annual career fair. Bring your CV and dress professionally for potential on-site interviews.",
            image: "https://via.placeholder.com/400x250?text=Career+Fair"
        },
        {
            title: "New Library Hours During Exam Period",
            date: "May 15, 2025",
            excerpt: "The university library will remain open until midnight during the examination period to accommodate students' study needs.",
            image: "https://via.placeholder.com/400x250?text=Library"
        }
    ];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };
    
    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    };

    // Handle testimonial rotation
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        
        return () => clearInterval(interval);
    }, [testimonials.length]);    // Intersection observer for stats counter animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !countersStarted) {
                    setCountersStarted(true);
                }
            },
            { threshold: 0.5 }
        );
        
        const currentRef = statsRef.current;
        
        if (currentRef) {
            observer.observe(currentRef);
        }
        
        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Smooth scroll function for the scroll down button
    const scrollToServices = () => {
        document.querySelector('.services-section')?.scrollIntoView({
            behavior: 'smooth'
        });
    };    // Animated counter component
    const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
        const [count, setCount] = useState(0);
        
        useEffect(() => {
            if (countersStarted) {
                let start = 0;
                const end = value;
                const duration = 2000; // 2 seconds
                const range = end - start;
                const increment = end > start ? 1 : -1;
                const stepTime = Math.abs(Math.floor(duration / range));
                
                const timer = setInterval(() => {
                    start += increment;
                    setCount(start);
                    if (start === end) {
                        clearInterval(timer);
                    }
                }, stepTime);
                
                return () => {
                    clearInterval(timer);
                };
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [value, countersStarted]);
        
        return <span>{count}{suffix}</span>;
    };

    return (
        <div className="home-wrapper">
            {/* Hero Section */}
            <section className="modern-hero">
                <div className="hero-background"></div>
                <div className="hero-content">
                    <h1 className="hero-title">Welcome to Walter Sisulu University</h1>
                    <p className="hero-subtitle">
                        Empowering minds, transforming futures. Experience excellence in education
                        at one of South Africa's leading institutions.
                    </p>
                    <div className="hero-cta">
                        <Link to="/course-registration" className="btn-hero-primary">
                            <i className="fas fa-user-graduate"></i> Register Now
                        </Link>
                        <Link to="/campus-navigation" className="btn-hero-secondary">
                            <i className="fas fa-map-marker-alt"></i> Explore Campus
                        </Link>
                    </div>
                </div>
                <div className="scroll-down" onClick={scrollToServices}>
                    <i className="fas fa-chevron-down"></i>
                </div>
            </section>

            {/* Services Section */}
            <motion.section 
                className="services-section"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
            >
                <div className="section-header">
                    <h2 className="section-title">Student Services</h2>
                    <p className="section-description">
                        Access our comprehensive range of digital services designed to enhance your university experience.
                    </p>
                </div>
                <div className="services-grid">
                    <motion.div className="service-card" variants={itemVariants}>
                        <div className="service-icon">
                            <i className="fas fa-robot"></i>
                        </div>
                        <div className="service-content">
                            <h3 className="service-title">AI Chatbot Assistant</h3>
                            <p className="service-description">
                                Get instant answers to your questions about courses, campus services, and more through our AI-powered chatbot.
                            </p>
                            <Link to="/chatbot" className="service-link">
                                Ask a question <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div className="service-card" variants={itemVariants}>
                        <div className="service-icon">
                            <i className="fas fa-hand-holding-usd"></i>
                        </div>
                        <div className="service-content">
                            <h3 className="service-title">Bursary Information</h3>
                            <p className="service-description">
                                Explore available bursaries and financial aid options to support your education at WSU.
                            </p>
                            <Link to="/bursary-info" className="service-link">
                                Find bursaries <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div className="service-card" variants={itemVariants}>
                        <div className="service-icon">
                            <i className="fas fa-map-marked-alt"></i>
                        </div>
                        <div className="service-content">
                            <h3 className="service-title">Campus Navigation</h3>
                            <p className="service-description">
                                Find your way around campus with our interactive map and navigation system.
                            </p>
                            <Link to="/campus-navigation" className="service-link">
                                Navigate campus <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div className="service-card" variants={itemVariants}>
                        <div className="service-icon">
                            <i className="fas fa-utensils"></i>
                        </div>
                        <div className="service-content">
                            <h3 className="service-title">Food Ordering</h3>
                            <p className="service-description">
                                Order food online from campus cafeterias and restaurants for quick pickup.
                            </p>
                            <Link to="/food-ordering" className="service-link">
                                Order food <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div className="service-card" variants={itemVariants}>
                        <div className="service-icon">
                            <i className="fas fa-book"></i>
                        </div>
                        <div className="service-content">
                            <h3 className="service-title">Module Selection</h3>
                            <p className="service-description">
                                Browse and select academic modules for your program of study.
                            </p>
                            <Link to="/module-selection" className="service-link">
                                Select modules <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div className="service-card" variants={itemVariants}>
                        <div className="service-icon">
                            <i className="fas fa-user-edit"></i>
                        </div>
                        <div className="service-content">
                            <h3 className="service-title">Course Registration</h3>
                            <p className="service-description">
                                Complete your course registration process entirely online.
                            </p>
                            <Link to="/course-registration" className="service-link">
                                Register now <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* News Section */}
            <motion.section 
                className="news-section"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
            >
                <div className="section-header">
                    <h2 className="section-title">Latest Updates</h2>
                    <p className="section-description">
                        Stay informed with the latest news, events, and announcements from Walter Sisulu University.
                    </p>
                </div>
                <div className="news-grid">
                    {news.map((item, index) => (
                        <motion.div key={index} className="news-card" variants={itemVariants}>
                            <div className="news-image">
                                <img src={item.image} alt={item.title} />
                                <div className="news-date">{item.date}</div>
                            </div>
                            <div className="news-content">
                                <h3 className="news-title">{item.title}</h3>
                                <p className="news-excerpt">{item.excerpt}</p>                                <Link to="/" className="news-link">
                                    Read more <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Quick Stats Section */}
            <motion.section 
                className="stats-section"
                ref={statsRef}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={containerVariants}
            >
                <div className="stats-container">
                    {stats.map((stat, index) => (
                        <motion.div key={index} className="stat-item" variants={itemVariants}>
                            <div className="stat-value">
                                {countersStarted ? <Counter value={stat.value} suffix={stat.suffix} /> : '0'}
                            </div>
                            <div className="stat-label">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Testimonials Section */}
            <motion.section 
                className="testimonials-section"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
            >
                <div className="section-header">
                    <h2 className="section-title">Student Testimonials</h2>
                    <p className="section-description">
                        Hear what our students have to say about their experience at Walter Sisulu University.
                    </p>
                </div>
                <div className="testimonials-container">
                    <motion.div 
                        className="testimonial-card"
                        key={currentTestimonial}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="testimonial-text">{testimonials[currentTestimonial].text}</p>
                        <div className="testimonial-author">
                            <div className="author-avatar">
                                <img src={testimonials[currentTestimonial].avatar} alt="Student" />
                            </div>
                            <div className="author-info">
                                <div className="author-name">{testimonials[currentTestimonial].name}</div>
                                <div className="author-role">{testimonials[currentTestimonial].role}</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Campus Map Preview */}
            <motion.section 
                className="campus-map-section"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
            >
                <div className="section-header">
                    <h2 className="section-title">Campus Map</h2>
                    <p className="section-description">
                        Explore our beautiful campus with our interactive map.
                    </p>
                </div>
                <motion.div className="map-container" variants={itemVariants}>
                    <Link to="/campus-navigation">
                        <div className="map-placeholder"></div>
                    </Link>
                </motion.div>
            </motion.section>

            {/* Call to Action */}
            <motion.section 
                className="cta-section"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
            >
                <div className="cta-content">
                    <motion.h2 className="cta-title" variants={itemVariants}>Ready to Start Your Academic Journey?</motion.h2>
                    <motion.p className="cta-text" variants={itemVariants}>
                        Whether you're registering for classes, applying for bursaries, or need assistance navigating campus, we're here to help you succeed.
                    </motion.p>
                    <motion.div className="cta-buttons" variants={itemVariants}>
                        <Link to="/course-registration" className="btn-cta-primary">
                            <i className="fas fa-graduation-cap"></i> Register for Courses
                        </Link>
                        <Link to="/chatbot" className="btn-cta-secondary">
                            <i className="fas fa-question-circle"></i> Get Help
                        </Link>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
};

export default HomePage;
