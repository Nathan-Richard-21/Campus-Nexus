import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import './BursaryInfo.css';

// Enhanced Bursary interface with more comprehensive information
interface Bursary {
    id: string;
    name: string;
    description: string;
    university: string;
    faculty?: string;
    amount?: string;
    applicationLink: string;
    deadline: string;
    requirements: string[];
    field: string;
    degree: string;
    isFeatured?: boolean;
}

// South African mock bursary data with comprehensive information
const mockBursaries: Bursary[] = [
    {
        id: "1",
        name: "NSFAS Bursary",
        description: "The National Student Financial Aid Scheme (NSFAS) provides financial aid to eligible students at public universities and TVET colleges. The funding covers tuition fees, accommodation, meal allowances, books and learning materials, and personal care allowance.",
        university: "All South African Public Universities",
        amount: "Full Cost of Study",
        applicationLink: "https://www.nsfas.org.za/",
        deadline: "2025-01-31",
        requirements: ["South African citizen", "SASSA grant recipients", "Combined household income less than R350,000 per year"],
        field: "All Fields",
        degree: "All Degrees",
        isFeatured: true
    },
    {
        id: "2",
        name: "Woza Matrics Bursary",
        description: "The Woza Matrics Bursary specifically supports students at Walter Sisulu University who demonstrate academic excellence. Students with strong matric results are encouraged to apply.",
        university: "Walter Sisulu University",
        amount: "R80,000 per year",
        applicationLink: "https://www.wsu.ac.za/financial-aid/bursaries/",
        deadline: "2025-03-15",
        requirements: ["Enrolled at Walter Sisulu University", "Academic achievement (average of 70%+)", "South African citizen"],
        field: "All Fields",
        degree: "Undergraduate",
        isFeatured: true
    },
    {
        id: "3",
        name: "Sasol Foundation Bursary",
        description: "The Sasol Bursary Programme offers all-inclusive bursaries to high-performing students in STEM fields. The programme includes vacation work, mentorship and leadership development.",
        university: "All South African Universities",
        faculty: "Engineering & Science",
        amount: "Full Cost of Study",
        applicationLink: "https://www.sasolbursaries.com/",
        deadline: "2025-04-30",
        requirements: ["South African citizen", "Minimum of 70% in Mathematics and Science", "Planning to study Engineering or Science"],
        field: "Engineering, Science, Technology",
        degree: "Undergraduate & Postgraduate"
    },
    {
        id: "4",
        name: "WSU Vice-Chancellor's Scholarship",
        description: "Awarded to top-performing students at Walter Sisulu University. This prestigious scholarship recognizes academic excellence across all faculties.",
        university: "Walter Sisulu University",
        faculty: "All Faculties",
        amount: "Full Tuition",
        applicationLink: "https://www.wsu.ac.za/scholarships/",
        deadline: "2025-02-28",
        requirements: ["Currently enrolled at WSU", "Academic excellence (75%+ average)", "Leadership qualities"],
        field: "All Fields",
        degree: "All Degrees"
    },
    {
        id: "5",
        name: "ISFAP Bursary",
        description: "The Ikusasa Student Financial Aid Programme supports students in professions where there are scarce skills. They provide comprehensive support including tuition, accommodation, books, meals, and psychosocial support.",
        university: "Selected South African Universities",
        amount: "Full Cost of Study",
        applicationLink: "https://www.isfap.co.za/",
        deadline: "2025-03-31",
        requirements: ["South African citizen", "Combined household income between R350,000 and R600,000 per year", "Studying towards scarce skills qualification"],
        field: "Medicine, Engineering, Actuarial Science, Accounting",
        degree: "Undergraduate"
    },
    {
        id: "6",
        name: "Eastern Cape Provincial Bursary",
        description: "Bursary program funded by the Eastern Cape Provincial Government to support students from the province. Priority is given to scarce skills areas and students from disadvantaged backgrounds.",
        university: "All South African Universities",
        amount: "R50,000 - R120,000 per year",
        applicationLink: "https://www.ecpg.gov.za/bursaries/",
        deadline: "2025-01-15",
        requirements: ["Eastern Cape resident", "Financial need", "Good academic record"],
        field: "Education, Health Sciences, Agriculture, Engineering",
        degree: "Undergraduate & Postgraduate"
    },
    {
        id: "7",
        name: "Funza Lushaka Bursary",
        description: "A multi-year programme that promotes teaching in public schools. Recipients must teach at a public school for the same number of years that they received the bursary.",
        university: "All South African Universities offering teaching degrees",
        faculty: "Education",
        amount: "Full Cost of Study",
        applicationLink: "https://www.funzalushaka.doe.gov.za/",
        deadline: "2025-01-15",
        requirements: ["South African citizen", "Planning to complete a teaching qualification", "Good academic record"],
        field: "Education",
        degree: "Undergraduate & Postgraduate"
    },
    {
        id: "8",
        name: "HWSETA Bursary",
        description: "The Health and Welfare Sector Education and Training Authority offers bursaries to students pursuing careers in the health and social services sectors.",
        university: "All South African Universities",
        amount: "Varies",
        applicationLink: "https://hwseta.org.za/",
        deadline: "2025-03-30",
        requirements: ["South African citizen", "Studying towards a qualification in health or social services", "Academic potential"],
        field: "Health Sciences, Social Work, Psychology",
        degree: "Undergraduate & Postgraduate"
    },
    {
        id: "9",
        name: "PPS Foundation Bursary",
        description: "The PPS Foundation supports students in professional fields with a focus on healthcare, engineering, accounting, and legal studies.",
        university: "All Accredited South African Universities",
        amount: "R65,000 per year",
        applicationLink: "https://www.pps.co.za/foundation/",
        deadline: "2025-05-31",
        requirements: ["South African citizen", "Enrolled or planning to enroll in professional degree", "Academic achievement"],
        field: "Medical, Legal, Accounting, Engineering",
        degree: "Undergraduate & Postgraduate"
    },
    {
        id: "10",
        name: "Motsepe Foundation Bursary",
        description: "The Motsepe Foundation provides comprehensive bursaries to academically deserving students from financially disadvantaged backgrounds.",
        university: "All South African Universities",
        amount: "Full Cost of Study",
        applicationLink: "https://www.motsepefoundation.org/bursaries/",
        deadline: "2025-02-15",
        requirements: ["South African citizen", "Financial need", "Academic potential", "Community involvement"],
        field: "All Fields",
        degree: "Undergraduate"
    }
];

const BursaryInfo: React.FC = () => {
    const [bursaries, setBursaries] = useState<Bursary[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');
    
    // Filter states
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [universityFilter, setUniversityFilter] = useState<string>('');
    const [fieldFilter, setFieldFilter] = useState<string>('');
    const [degreeFilter, setDegreeFilter] = useState<string>('');

    // Calculate the deadline proximity (for visual indicators)
    const getDeadlineStatus = useCallback((deadlineDate: string): string => {
        const deadline = new Date(deadlineDate);
        const today = new Date();
        const diffTime = deadline.getTime() - today.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays < 30) return 'deadline-soon';
        if (diffDays < 90) return 'deadline-medium';
        return 'deadline-far';
    }, []);

    // Format deadline date for display
    const formatDeadline = useCallback((deadlineDate: string): string => {
        return new Date(deadlineDate).toLocaleDateString('en-ZA', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    }, []);

    useEffect(() => {
        const fetchBursaryInfo = async () => {
            try {
                setLoading(true);
                // In a real app, replace with an actual API call
                // const response = await fetch('/api/bursaries');
                // const data: Bursary[] = await response.json();
                
                // Using mock data for now
                setTimeout(() => {
                    setBursaries(mockBursaries);
                    setLoading(false);
                }, 800); // Simulating API delay
            } catch (error) {
                console.error('Error fetching bursary information:', error);
                setError('Unable to load bursary information. Please try again later.');
                setLoading(false);
            }
        };

        fetchBursaryInfo();
    }, []);

    // Get unique universities for filter dropdown
    const universities = mockBursaries
        .map(bursary => bursary.university)
        .filter((value, index, self) => self.indexOf(value) === index);
    
    // Get unique fields for filter dropdown
    const fields = mockBursaries
        .map(bursary => bursary.field)
        .filter((value, index, self) => self.indexOf(value) === index);
    
    // Get unique degree levels for filter dropdown
    const degrees = mockBursaries
        .map(bursary => bursary.degree)
        .filter((value, index, self) => self.indexOf(value) === index);

    // Filter bursaries based on selected filters
    const filteredBursaries = bursaries.filter(bursary => {
        return (
            (searchTerm === '' || 
                bursary.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                bursary.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
            (universityFilter === '' || bursary.university === universityFilter) &&
            (fieldFilter === '' || bursary.field === fieldFilter) &&
            (degreeFilter === '' || bursary.degree === degreeFilter)
        );
    });

    return (
        <div className="bursary-container">
            <motion.div 
                className="bursary-header"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1>South African Bursary Opportunities</h1>
                <p>Find and apply for bursaries specifically available to Walter Sisulu University students and other South African universities.</p>
            </motion.div>

            <motion.div 
                className="bursary-filters"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <div className="filter-group">
                    <label htmlFor="search">Search</label>
                    <input 
                        type="text" 
                        id="search" 
                        placeholder="Search bursaries..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="filter-group">
                    <label htmlFor="university">University</label>
                    <select 
                        id="university" 
                        value={universityFilter}
                        onChange={(e) => setUniversityFilter(e.target.value)}
                    >
                        <option value="">All Universities</option>
                        {universities.map((university, index) => (
                            <option key={index} value={university}>{university}</option>
                        ))}
                    </select>
                </div>
                <div className="filter-group">
                    <label htmlFor="field">Field of Study</label>
                    <select 
                        id="field" 
                        value={fieldFilter}
                        onChange={(e) => setFieldFilter(e.target.value)}
                    >
                        <option value="">All Fields</option>
                        {fields.map((field, index) => (
                            <option key={index} value={field}>{field}</option>
                        ))}
                    </select>
                </div>
                <div className="filter-group">
                    <label htmlFor="degree">Degree Level</label>
                    <select 
                        id="degree" 
                        value={degreeFilter}
                        onChange={(e) => setDegreeFilter(e.target.value)}
                    >
                        <option value="">All Degrees</option>
                        {degrees.map((degree, index) => (
                            <option key={index} value={degree}>{degree}</option>
                        ))}
                    </select>
                </div>
            </motion.div>

            {loading ? (
                <div className="empty-state">
                    <h3>Loading bursary opportunities...</h3>
                    <p>Please wait while we fetch the latest bursary information.</p>
                </div>
            ) : error ? (
                <div className="empty-state">
                    <h3>Error</h3>
                    <p>{error}</p>
                </div>
            ) : filteredBursaries.length > 0 ? (
                <div className="bursary-grid filter-transition">
                    {filteredBursaries.map((bursary, index) => (
                        <motion.div 
                            key={bursary.id}
                            className="bursary-card"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            {bursary.isFeatured && (
                                <span className="bursary-badge">Featured</span>
                            )}
                            
                            <div className="bursary-logo">
                                <span className="bursary-icon" role="img" aria-label="Learning">🎓</span>
                            </div>
                            
                            <div className="bursary-content">
                                <h3 className="bursary-title">{bursary.name}</h3>
                                <p className="bursary-university">{bursary.university}</p>
                                <p className="bursary-description">{bursary.description}</p>
                                
                                <div className="bursary-details">
                                    {bursary.field && (
                                        <span className="detail-tag">
                                            <span role="img" aria-label="Field">🎓</span> {bursary.field}
                                        </span>
                                    )}
                                    {bursary.amount && (
                                        <span className="detail-tag">
                                            <span role="img" aria-label="Amount">💰</span> {bursary.amount}
                                        </span>
                                    )}
                                    {bursary.degree && (
                                        <span className="detail-tag">
                                            <span role="img" aria-label="Degree">📚</span> {bursary.degree}
                                        </span>
                                    )}
                                </div>
                                
                                <div className={`deadline ${getDeadlineStatus(bursary.deadline)}`}>
                                    <span role="img" aria-label="Deadline">⏰</span>
                                    <span>Deadline: {formatDeadline(bursary.deadline)}</span>
                                </div>
                                
                                <a 
                                    href={bursary.applicationLink} 
                                    className="apply-button" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    Apply Now
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            ) : (
                <div className="empty-state">
                    <h3>No Matching Bursaries</h3>
                    <p>No bursaries match your current filter criteria. Try adjusting your filters or try a different search term.</p>
                </div>
            )}
        </div>
    );
};

export default BursaryInfo;