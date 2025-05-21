import React from 'react';
import { CancelledSubject } from './types';

interface CancelSubjectsSectionProps {
  cancelledSubjects: CancelledSubject[];
  setCancelledSubjects: React.Dispatch<React.SetStateAction<CancelledSubject[]>>;
}

const CancelSubjectsSection: React.FC<CancelSubjectsSectionProps> = ({
  cancelledSubjects,
  setCancelledSubjects,
}) => {
  const handleAddSubject = () => {
    setCancelledSubjects([
      ...cancelledSubjects,
      { code: '', name: '', dateOfCancellation: '' },
    ]);
  };

  const handleRemoveSubject = (index: number) => {
    setCancelledSubjects(cancelledSubjects.filter((_, i) => i !== index));
  };

  const handleSubjectChange = (index: number, field: keyof CancelledSubject, value: string) => {
    const updatedSubjects = [...cancelledSubjects];
    updatedSubjects[index] = {
      ...updatedSubjects[index],
      [field]: value,
    };
    setCancelledSubjects(updatedSubjects);
  };

  return (
    <div className="form-section cancel-subjects-section">
      <h3>SECTION C: CANCELLATION OF SUBJECT</h3>
      <p className="section-note">(AS PER SECTION 7 OF THE RULES AND REGULATIONS REGARDING FEES)</p>
      
      {cancelledSubjects.map((subject, index) => (
        <div key={index} className="subject-entry">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor={`cancelCode-${index}`}>SUBJECT CODE</label>
              <input
                type="text"
                id={`cancelCode-${index}`}
                value={subject.code}
                onChange={(e) => handleSubjectChange(index, 'code', e.target.value)}
                placeholder="Enter subject code"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor={`cancelDate-${index}`}>DATE OF CANCELLATION</label>
              <input
                type="date"
                id={`cancelDate-${index}`}
                value={subject.dateOfCancellation}
                onChange={(e) => handleSubjectChange(index, 'dateOfCancellation', e.target.value)}
                required
              />
            </div>
          </div>
          
          <div className="form-group full-width">
            <label htmlFor={`cancelName-${index}`}>SUBJECT NAME</label>
            <input
              type="text"
              id={`cancelName-${index}`}
              value={subject.name}
              onChange={(e) => handleSubjectChange(index, 'name', e.target.value)}
              placeholder="Enter subject name"
              required
            />
          </div>
          
          <button 
            type="button" 
            className="remove-button"
            onClick={() => handleRemoveSubject(index)}
          >
            Remove Subject
          </button>
          
          <hr className="divider" />
        </div>
      ))}
      
      <button 
        type="button" 
        className="add-button"
        onClick={handleAddSubject}
      >
        + Add Another Subject to Cancel
      </button>
    </div>
  );
};

export default CancelSubjectsSection;
