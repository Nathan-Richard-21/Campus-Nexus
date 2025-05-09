import React, { useEffect, useState } from 'react';
import './BursaryInfo.css';

interface Bursary {
    id: string;
    name: string;
    description: string;
    applicationLink: string;
}

const BursaryInfo: React.FC = () => {
    const [bursaries, setBursaries] = useState<Bursary[]>([]);

    useEffect(() => {
        const fetchBursaryInfo = async () => {
            try {
                const response = await fetch('/api/bursaries');
                const data: Bursary[] = await response.json();
                setBursaries(data);
            } catch (error) {
                console.error('Error fetching bursary information:', error);
            }
        };

        fetchBursaryInfo();
    }, []);

    return (
        <div className="bursary-info">
            <h2>Bursary Information</h2>
            {bursaries.length > 0 ? (
                <ul>
                    {bursaries.map((bursary) => (
                        <li key={bursary.id}>
                            <h3>{bursary.name}</h3>
                            <p>{bursary.description}</p>
                            <a href={bursary.applicationLink} target="_blank" rel="noopener noreferrer">Apply Now</a>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No bursary information available at this time.</p>
            )}
        </div>
    );
};

export default BursaryInfo;