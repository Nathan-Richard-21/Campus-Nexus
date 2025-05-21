import React from 'react';
import { PersonalDetails } from './types';

interface PersonalDetailsSectionProps {
  personalDetails: PersonalDetails;
  setPersonalDetails: React.Dispatch<React.SetStateAction<PersonalDetails>>;
}

const PersonalDetailsSection: React.FC<PersonalDetailsSectionProps> = ({ personalDetails, setPersonalDetails }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPersonalDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="form-section personal-details-section">
      <h3>SECTION A: PERSONAL AND ACADEMIC DETAILS</h3>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="studentNo">STUDENT NO.</label>
          <input
            type="text"
            id="studentNo"
            name="studentNo"
            value={personalDetails.studentNo}
            onChange={handleChange}
            placeholder="Enter student number"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact">CONTACTS</label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={personalDetails.contact}
            onChange={handleChange}
            placeholder="Enter contact details"
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">NAME AND SURNAME</label>
          <input
            type="text"
            id="name"
            name="name"
            value={personalDetails.name}
            onChange={handleChange}
            placeholder="Enter full name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="id">ID</label>
          <input
            type="text"
            id="id"
            name="id"
            value={personalDetails.id}
            onChange={handleChange}
            placeholder="Enter ID number"
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="programName">PROGRAM NAME</label>
          <input
            type="text"
            id="programName"
            name="programName"
            value={personalDetails.programName}
            onChange={handleChange}
            placeholder="Enter program name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="programCode">CODE</label>
          <input
            type="text"
            id="programCode"
            name="programCode"
            value={personalDetails.programCode}
            onChange={handleChange}
            placeholder="Enter program code"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalDetailsSection;
