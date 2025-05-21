import React from 'react';
import { FormSectionProps, PersonalDetails } from './types';

// Simple placeholder component for now
const PersonalDetailsSection: React.FC<FormSectionProps> = ({ 
  onUpdate, 
  data, 
  isSubmitting = false 
}) => {
  return (
    <div>
      <h2>Personal Details Section</h2>
      <p>This component will handle personal details input.</p>
    </div>
  );
};

// Ensure file is treated as a module
export default PersonalDetailsSection;