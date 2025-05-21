import React from 'react';
import { FormSectionProps, Subject } from './types';

// Sample subjects (moved outside component to avoid re-creation)
const sampleSubjects: Subject[] = [
  {
    id: '1',
    name: 'Introduction to Computer Science',
    code: 'CS101',
    credits: 3,
    selected: false
  },
  {
    id: '2',
    name: 'Data Structures and Algorithms',
    code: 'CS202',
    credits: 4,
    selected: false
  }
];

// Simple placeholder component for now
const AddSubjectsSection: React.FC<FormSectionProps> = ({
  onUpdate,
  data,
  isSubmitting = false
}) => {
  return (
    <div>
      <h2>Subject Selection</h2>
      <p>This component will handle subject selection.</p>
    </div>
  );
};

// Ensure file is treated as a module
export default AddSubjectsSection;