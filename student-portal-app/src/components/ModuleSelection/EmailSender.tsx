import React, { useState, useCallback } from 'react';
import emailjs from '@emailjs/browser';
import { FormData } from './types';

interface EmailSenderProps {
  formData: FormData;
  onSuccess: () => void;
  onError: (error: any) => void;
}

const EmailSender: React.FC<EmailSenderProps> = ({ formData, onSuccess, onError }) => {
  const [sending, setSending] = useState(false);
  
  const sendEmail = useCallback(async () => {
    setSending(true);
    
    try {
      // Format the form data for the email
      const emailData = {
        to_email: 'nrchinoz49@gmail.com',
        subject: `Form Submission: ${formData.formType.toUpperCase()} Request`,
        student_name: formData.personalDetails.name,
        student_number: formData.personalDetails.studentNo,
        form_type: formData.formType,
        form_data: JSON.stringify(formData, null, 2)
      };
      
      // Replace these with your actual EmailJS service ID, template ID, and public key
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        emailData,
        'YOUR_PUBLIC_KEY'
      );
      
      setSending(false);
      onSuccess();
    } catch (error) {
      console.error('Error sending email:', error);
      setSending(false);
      onError(error);
    }
  }, [formData, onSuccess, onError]);
  
  return (
    <button 
      type="button"
      className={`submit-btn ${sending ? 'sending' : ''}`}
      onClick={sendEmail}
      disabled={sending}
    >
      {sending ? 'Sending...' : 'Submit Form'}
    </button>
  );
};

export default EmailSender;
