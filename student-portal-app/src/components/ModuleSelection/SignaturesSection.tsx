import React from 'react';
import { Signatures } from './types';

interface SignaturesSectionProps {
  signatures: Signatures;
  setSignatures: React.Dispatch<React.SetStateAction<Signatures>>;
  formType: 'addition' | 'cancellation' | 'termination' | 'personalDetails';
}

const SignaturesSection: React.FC<SignaturesSectionProps> = ({
  signatures,
  setSignatures,
  formType,
}) => {
  const handleSignatureChange = (role: string, field: 'signature' | 'date', value: string) => {
    setSignatures({
      ...signatures,
      [role]: {
        ...signatures[role as keyof Signatures],
        [field]: value,
      },
    });
  };

  const needsAllSignatures = formType !== 'personalDetails';

  return (
    <div className="form-section signatures-section">
      <h3>SECTION F: SIGNATURES</h3>
      
      <div className="signature-row">
        <div className="signature-group">
          <label>STUDENT</label>
          <div className="signature-box">
            <canvas className="signature-canvas" width="200" height="60"></canvas>
            <button type="button" className="clear-signature">Clear</button>
          </div>
          <input
            type="date"
            value={signatures.student?.date || ''}
            onChange={(e) => handleSignatureChange('student', 'date', e.target.value)}
            required
          />
        </div>
      </div>
      
      {needsAllSignatures && (
        <>
          <div className="signature-row">
            <div className="signature-group">
              <label>
                HEAD OF DEPARTMENT
                <span className="signature-note">(Not necessary for change of personal details)</span>
              </label>
              <div className="signature-box">
                <canvas className="signature-canvas" width="200" height="60"></canvas>
                <button type="button" className="clear-signature">Clear</button>
              </div>
              <input
                type="date"
                value={signatures.headOfDepartment?.date || ''}
                onChange={(e) => handleSignatureChange('headOfDepartment', 'date', e.target.value)}
              />
            </div>
          </div>

          <div className="signature-row">
            <div className="signature-group">
              <label>
                LIBRARIAN
                <span className="signature-note">(Not necessary for change of personal details)</span>
              </label>
              <div className="signature-box">
                <canvas className="signature-canvas" width="200" height="60"></canvas>
                <button type="button" className="clear-signature">Clear</button>
              </div>
              <input
                type="date"
                value={signatures.librarian?.date || ''}
                onChange={(e) => handleSignatureChange('librarian', 'date', e.target.value)}
              />
            </div>
          </div>

          <div className="signature-row">
            <div className="signature-group">
              <label>
                COMPUTER LAB
                <span className="signature-note">(Not necessary for change of personal details)</span>
              </label>
              <div className="signature-box">
                <canvas className="signature-canvas" width="200" height="60"></canvas>
                <button type="button" className="clear-signature">Clear</button>
              </div>
              <input
                type="date"
                value={signatures.computerLab?.date || ''}
                onChange={(e) => handleSignatureChange('computerLab', 'date', e.target.value)}
              />
            </div>
          </div>
        </>
      )}

      <div className="signature-row">
        <div className="signature-group">
          <label>STUDENT FEES</label>
          <div className="signature-box">
            <canvas className="signature-canvas" width="200" height="60"></canvas>
            <button type="button" className="clear-signature">Clear</button>
          </div>
          <input
            type="date"
            value={signatures.studentFees?.date || ''}
            onChange={(e) => handleSignatureChange('studentFees', 'date', e.target.value)}
            required
          />
        </div>
      </div>
      
      <div className="form-note">
        <p><strong>Note:</strong> By submitting this form, you agree that digital signatures collected here are valid and legally binding.</p>
      </div>
    </div>
  );
};

export default SignaturesSection;
