// Define FormProcessing component types

// Form state interface
export interface FormState {
  personalDetails: PersonalDetails;
  subjects: Subject[];
  isSubmitting: boolean;
  isValid: boolean;
}

// Personal details interface
export interface PersonalDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  dateOfBirth?: Date;
}

// Subject interface
export interface Subject {
  id: string;
  name: string;
  code: string;
  credits: number;
  selected: boolean;
}

// Form section props
export interface FormSectionProps {
  onUpdate: (data: any) => void;
  data: any;
  isSubmitting?: boolean;
}

// Form processing context props
export interface FormProcessingContextProps {
  formState: FormState;
  updatePersonalDetails: (details: PersonalDetails) => void;
  updateSubjects: (subjects: Subject[]) => void;
  submitForm: () => Promise<void>;
}