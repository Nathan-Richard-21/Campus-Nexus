import React from 'react';

const CampusNavigation: React.FC = () => {
    return (
        <div className="campus-navigation">
            <h1>Campus Navigation</h1>
            <p>Welcome to the campus navigation system. Use the search bar below to find your way around campus.</p>
            <input type="text" placeholder="Enter building name or coordinates" />
            <button>Navigate</button>
            <div className="navigation-results">
                {/* Navigation results will be displayed here */}
            </div>
        </div>
    );
};

export default CampusNavigation;