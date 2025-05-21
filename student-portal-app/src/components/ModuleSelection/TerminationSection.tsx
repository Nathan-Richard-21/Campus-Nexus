import React from 'react';
import { TerminationInfo } from './types';

interface TerminationSectionProps {
  terminationInfo: TerminationInfo;
  setTerminationInfo: React.Dispatch<React.SetStateAction<TerminationInfo>>;
}

const TerminationSection: React.FC<TerminationSectionProps> = ({
  terminationInfo,
  setTerminationInfo,
}) => {
  const handleChange = (field: keyof TerminationInfo, value: string | boolean) => {
    setTerminationInfo({
      ...terminationInfo,
      [field]: value,
    });
  };

  const reasons = [
    'PERSONAL',
    'WORK COMMITMENT',
    'FINANCIAL',
    'DISCIPLINARY MEASURES',
    'POOR LECTURES',
    'STUDENT DECEASED',
    'TRANSFER',
    'WRONG CHOICE',
    'OTHER',
  ];

  return (
    <div className="form-section termination-section">
      <h3>SECTION D: TERMINATION OF STUDIES</h3>
      <p className="section-note">(AS PER SECTION OF THE RULES AND REGULATIONS REGARDING FEES)</p>
      
      <div className="form-row radio-group">
        <div className="form-group">
          <label>ARE YOU A BURSARY HOLDER?</label>
          <div className="radio-options">
            <label>
              <input
                type="radio"
                name="bursaryHolder"
                checked={terminationInfo.isBursaryHolder === true}
                onChange={() => handleChange('isBursaryHolder', true)}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="bursaryHolder"
                checked={terminationInfo.isBursaryHolder === false}
                onChange={() => handleChange('isBursaryHolder', false)}
              />
              No
            </label>
          </div>
        </div>
        
        <div className="form-group">
          <label>DOES YOUR EMPLOYER PAY YOUR FEES?</label>
          <div className="radio-options">
            <label>
              <input
                type="radio"
                name="employerPays"
                checked={terminationInfo.isEmployerPaying === true}
                onChange={() => handleChange('isEmployerPaying', true)}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="employerPays"
                checked={terminationInfo.isEmployerPaying === false}
                onChange={() => handleChange('isEmployerPaying', false)}
              />
              No
            </label>
          </div>
        </div>
      </div>
      
      <div className="form-group full-width">
        <label>REASON FOR CANCELLATION (PLEASE SELECT ONE)</label>
        <div className="reason-checkboxes">
          {reasons.map((reason) => (
            <div key={reason} className="reason-option">
              <label>
                <input
                  type="radio"
                  name="cancellationReason"
                  checked={terminationInfo.reason === reason}
                  onChange={() => handleChange('reason', reason)}
                />
                {reason}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      {terminationInfo.reason === 'OTHER' && (
        <div className="form-group full-width">
          <label htmlFor="otherReason">SPECIFY OTHER REASON</label>
          <textarea
            id="otherReason"
            value={terminationInfo.otherReason || ''}
            onChange={(e) => handleChange('otherReason', e.target.value)}
            placeholder="Please specify your reason for termination of studies"
            rows={3}
            required
          />
        </div>
      )}
    </div>
  );
};

export default TerminationSection;
