import React, { useState } from 'react';
import './ModuleSelection.css';
import PersonalDetailsSection from './PersonalDetailsSection';
import AddSubjectsSection from './AddSubjectsSection';
import CancelSubjectsSection from './CancelSubjectsSection';
import TerminationSection from './TerminationSection';
import PersonalDetailsChangeSection from './PersonalDetailsChangeSection';
import SignaturesSection from './SignaturesSection';
import EmailSender from './EmailSender';
import { 
  FormData, 
  PersonalDetails, 
  NewSubject, 
  CancelledSubject, 
  TerminationInfo, 
  PersonalDetailsChange,
  Signatures
} from './types';

const ModuleSelection: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formType, setFormType] = useState<'addition' | 'cancellation' | 'termination' | 'personalDetails'>('addition');
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  
  // Form state
  const [personalDetails, setPersonalDetails] = useState<PersonalDetails>({
    studentNo: '',
    contact: '',
    name: '',
    id: '',
    programName: '',
    programCode: '',
  });
  
  const [newSubjects, setNewSubjects] = useState<NewSubject[]>([
    { code: '', name: '', classGroup: '', examMonth: '', reasonForChange: '' }
  ]);
  
  const [cancelledSubjects, setCancelledSubjects] = useState<CancelledSubject[]>([
    { code: '', name: '', dateOfCancellation: '' }
  ]);
  
  const [terminationInfo, setTerminationInfo] = useState<TerminationInfo>({
    isBursaryHolder: false,
    isEmployerPaying: false,
    reason: '',
  });
  
  const [personalDetailsChange, setPersonalDetailsChange] = useState<PersonalDetailsChange>({});
  
  const [signatures, setSignatures] = useState<Signatures>({
    student: { signature: '', date: '' },
    studentFees: { signature: '', date: '' },
  });

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleFormTypeChange = (type: 'addition' | 'cancellation' | 'termination' | 'personalDetails') => {
    setFormType(type);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Prepare form data based on the selected form type
    const formData: FormData = {
      formType,
      personalDetails,
    };

    switch (formType) {
      case 'addition':
        formData.newSubjects = newSubjects;
        break;
      case 'cancellation':
        formData.cancelledSubjects = cancelledSubjects;
        break;
      case 'termination':
        formData.terminationInfo = terminationInfo;
        break;
      case 'personalDetails':
        formData.personalDetailsChange = personalDetailsChange;
        break;
    }

    formData.signatures = signatures;

    // Log the form data (you'd typically send this to a server)
    console.log('Form Data:', formData);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitSuccess(true);
    }, 1500);
  };
  
  const handleEmailSuccess = () => {
    setSubmitSuccess(true);
    setSubmitError(null);
  };
  
  const handleEmailError = (error: any) => {
    setSubmitSuccess(false);
    setSubmitError('There was an error sending the form. Please try again later.');
  };

  const getFormData = (): FormData => {
    const formData: FormData = {
      formType,
      personalDetails,
    };

    switch (formType) {
      case 'addition':
        formData.newSubjects = newSubjects;
        break;
      case 'cancellation':
        formData.cancelledSubjects = cancelledSubjects;
        break;
      case 'termination':
        formData.terminationInfo = terminationInfo;
        break;
      case 'personalDetails':
        formData.personalDetailsChange = personalDetailsChange;
        break;
    }

    formData.signatures = signatures;
    return formData;
  };

  return (
    <div className="module-selection">
      <div className="form-header">
        <h1>FACULTY OF NATURAL SCIENCES</h1>
        <p>CHANGING OF PERSONAL AND ACADEMIC INFORMATION</p>
      </div>
      
      <div className="form-type-selector">
        <div 
          className={`form-type-option ${formType === 'addition' ? 'active' : ''}`} 
          onClick={() => handleFormTypeChange('addition')}
        >
          ADDITION OF SUBJECTS
        </div>
        <div 
          className={`form-type-option ${formType === 'cancellation' ? 'active' : ''}`} 
          onClick={() => handleFormTypeChange('cancellation')}
        >
          CANCELLATION OF SUBJECTS
        </div>
        <div 
          className={`form-type-option ${formType === 'termination' ? 'active' : ''}`} 
          onClick={() => handleFormTypeChange('termination')}
        >
          TERMINATION OF STUDIES
        </div>
        <div 
          className={`form-type-option ${formType === 'personalDetails' ? 'active' : ''}`} 
          onClick={() => handleFormTypeChange('personalDetails')}
        >
          CHANGE OF PERSONAL DETAILS
        </div>
      </div>
      
      {!submitSuccess ? (
        <form onSubmit={handleSubmit} className="form-container">
          <div className="step-indicator">
            <div className={`step ${currentStep >= 1 ? 'active' : ''}`}>1</div>
            <div className="step-connector"></div>
            <div className={`step ${currentStep >= 2 ? 'active' : ''}`}>2</div>
            {formType !== 'personalDetails' && (
              <>
                <div className="step-connector"></div>
                <div className={`step ${currentStep >= 3 ? 'active' : ''}`}>3</div>
              </>
            )}
          </div>
          
          {currentStep === 1 && (
            <PersonalDetailsSection 
              personalDetails={personalDetails}
              setPersonalDetails={setPersonalDetails}
            />
          )}
          
          {currentStep === 2 && formType === 'addition' && (
            <AddSubjectsSection 
              newSubjects={newSubjects}
              setNewSubjects={setNewSubjects}
            />
          )}
          
          {currentStep === 2 && formType === 'cancellation' && (
            <CancelSubjectsSection 
              cancelledSubjects={cancelledSubjects}
              setCancelledSubjects={setCancelledSubjects}
            />
          )}
          
          {currentStep === 2 && formType === 'termination' && (
            <TerminationSection 
              terminationInfo={terminationInfo}
              setTerminationInfo={setTerminationInfo}
            />
          )}
          
          {currentStep === 2 && formType === 'personalDetails' && (
            <PersonalDetailsChangeSection 
              personalDetailsChange={personalDetailsChange}
              setPersonalDetailsChange={setPersonalDetailsChange}
            />
          )}
          
          {currentStep === 3 && (
            <SignaturesSection 
              signatures={signatures}
              setSignatures={setSignatures}
              formType={formType}
            />
          )}
          
          <div className="form-actions">
            {currentStep > 1 && (
              <button 
                type="button" 
                className="back-btn"
                onClick={handlePrevStep}
              >
                Back
              </button>
            )}
            
            {(currentStep < 3 && formType !== 'personalDetails') || (currentStep < 2 && formType === 'personalDetails') ? (
              <button 
                type="button" 
                className="submit-btn"
                onClick={handleNextStep}
              >
                Continue
              </button>
            ) : (
              <EmailSender 
                formData={getFormData()} 
                onSuccess={handleEmailSuccess} 
                onError={handleEmailError}
              />
            )}
          </div>
          
          {submitError && (
            <div className="error-message">
              {submitError}
            </div>
          )}
        </form>
      ) : (
        <div className="success-message">
          <h2>Form Submitted Successfully!</h2>
          <p>Your request has been submitted to the Faculty of Natural Sciences.</p>
          <p>A confirmation email has been sent to your university email address.</p>
          <p>Please keep reference of your submission for future enquiries.</p>
          <button 
            onClick={() => window.location.reload()} 
            className="submit-btn" 
            style={{ margin: '20px auto', display: 'block' }}
          >
            Submit Another Form
          </button>
        </div>
      )}
    </div>
  );
};

export default ModuleSelection;

