import React from 'react';
import { NewSubject } from './types';

interface AddSubjectsSectionProps {
  newSubjects: NewSubject[];
  setNewSubjects: React.Dispatch<React.SetStateAction<NewSubject[]>>;
}

const AddSubjectsSection: React.FC<AddSubjectsSectionProps> = ({ newSubjects, setNewSubjects }) => {
  const handleAddSubject = () => {
    setNewSubjects([
      ...newSubjects,
      { code: '', name: '', classGroup: '', examMonth: '', reasonForChange: '' },
    ]);
  };

  const handleRemoveSubject = (index: number) => {
    setNewSubjects(newSubjects.filter((_, i) => i !== index));
  };

  const handleSubjectChange = (index: number, field: keyof NewSubject, value: string) => {
    const updatedSubjects = [...newSubjects];
    updatedSubjects[index] = {
      ...updatedSubjects[index],
      [field]: value,
    };
    setNewSubjects(updatedSubjects);
  };

  return (
    <div className="form-section add-subjects-section">
      <h3>SECTION B: NEW SUBJECT/PROGRAM CODE</h3>
      
      {newSubjects.map((subject, index) => (
        <div key={index} className="subject-entry">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor={`subjectCode-${index}`}>SUBJECT CODE</label>
              <input
                type="text"
                id={`subjectCode-${index}`}
                value={subject.code}
                onChange={(e) => handleSubjectChange(index, 'code', e.target.value)}
                placeholder="Enter subject code"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor={`subjectName-${index}`}>SUBJECT NAME</label>
              <input
                type="text"
                id={`subjectName-${index}`}
                value={subject.name}
                onChange={(e) => handleSubjectChange(index, 'name', e.target.value)}
                placeholder="Enter subject name"
                required
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor={`classGroup-${index}`}>CLASS GROUP</label>
              <input
                type="text"
                id={`classGroup-${index}`}
                value={subject.classGroup || ''}
                onChange={(e) => handleSubjectChange(index, 'classGroup', e.target.value)}
                placeholder="Enter class group"
              />
            </div>
            <div className="form-group">
              <label htmlFor={`examMonth-${index}`}>EXAM MONTH</label>
              <input
                type="month"
                id={`examMonth-${index}`}
                value={subject.examMonth || ''}
                onChange={(e) => handleSubjectChange(index, 'examMonth', e.target.value)}
              />
            </div>
          </div>
          
          <div className="form-group full-width">
            <label htmlFor={`reasonForChange-${index}`}>REASON FOR CHANGE</label>
            <textarea
              id={`reasonForChange-${index}`}
              value={subject.reasonForChange}
              onChange={(e) => handleSubjectChange(index, 'reasonForChange', e.target.value)}
              placeholder="Enter reason for adding this subject"
              rows={3}
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
        + Add Another Subject
      </button>
    </div>
  );
};

export default AddSubjectsSection;
