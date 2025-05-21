import React, { useState } from 'react';
import { PaymentModalProps } from './types';

const PaymentModal: React.FC<PaymentModalProps> = ({ 
  total, 
  onClose, 
  onPaymentComplete 
}) => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [studentId, setStudentId] = useState('');
  const [savePaymentInfo, setSavePaymentInfo] = useState(false);
  const [paymentStep, setPaymentStep] = useState(1);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  
  // Student validation - simulating a real check
  const validateStudent = () => {
    if (studentId.length < 7) return false;
    return /^\d+$/.test(studentId); // Simple check that it's all numbers
  };

  const handlePayNow = () => {
    if (!paymentMethod) return;
    
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      onPaymentComplete(paymentMethod);
    }, 1500);
  };
  
  const handleNextStep = () => {
    if (validateStudent()) {
      setPaymentStep(2);
    }
  };
  
  const formatCardNumber = (value: string) => {
    // Format the card number with spaces after every 4 digits
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    
    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };
  
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value);
    setCardNumber(formatted.substring(0, 19)); // Limit to 16 digits + 3 spaces
  };
  
  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    
    if (value.length > 2) {
      value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }
    
    setExpiryDate(value);
  };

  return (
    <div className="modal-overlay">
      <div className="modal payment-modal">
        <div className="modal-header">
          <h2>Payment</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        <div className="modal-content">
          {paymentStep === 1 ? (
            // Step 1: Student ID verification
            <div className="payment-step">
              <div className="step-indicator">
                <span className="step active">1</span>
                <span className="step-line"></span>
                <span className="step">2</span>
              </div>
              
              <h3>Student Verification</h3>
              <p className="step-description">Please enter your student ID to continue with the order</p>
              
              <div className="form-group">
                <label>
                  <i className="fas fa-id-card"></i> Student ID
                </label>
                <input 
                  type="text" 
                  placeholder="Enter your student ID" 
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                  className={studentId && !validateStudent() ? 'error' : ''}
                />
                {studentId && !validateStudent() && (
                  <p className="error-message">Please enter a valid student ID</p>
                )}
              </div>
              
              <button 
                className={`next-btn ${!validateStudent() ? 'disabled' : ''}`}
                onClick={handleNextStep}
                disabled={!validateStudent()}
              >
                Continue to Payment <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          ) : (
            // Step 2: Payment options
            <div className="payment-step">
              <div className="step-indicator">
                <span className="step completed">
                  <i className="fas fa-check"></i>
                </span>
                <span className="step-line completed"></span>
                <span className="step active">2</span>
              </div>
              
              <h3>Select Payment Method</h3>
              <div className="student-info">
                Student ID: <strong>{studentId}</strong>
                <button 
                  className="edit-btn" 
                  onClick={() => setPaymentStep(1)}
                >
                  Edit
                </button>
              </div>
              
              <div className="payment-options">
                <label className={paymentMethod === 'card' ? 'active' : ''}>
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={paymentMethod === 'card'}
                    onChange={() => setPaymentMethod('card')}
                  />
                  <i className="fas fa-credit-card"></i>
                  <span>Pay with Card Online</span>
                </label>
                
                <label className={paymentMethod === 'cash' ? 'active' : ''}>
                  <input
                    type="radio"
                    name="payment"
                    value="cash"
                    checked={paymentMethod === 'cash'}
                    onChange={() => setPaymentMethod('cash')}
                  />
                  <i className="fas fa-money-bill-wave"></i>
                  <span>Pay with Cash on Pickup</span>
                </label>
                
                <label className={paymentMethod === 'eft' ? 'active' : ''}>
                  <input
                    type="radio"
                    name="payment"
                    value="eft"
                    checked={paymentMethod === 'eft'}
                    onChange={() => setPaymentMethod('eft')}
                  />
                  <i className="fas fa-university"></i>
                  <span>Pay with EFT</span>
                </label>
              </div>
              
              {paymentMethod === 'card' && (
                <div className="card-details">
                  <div className="form-group">
                    <label>
                      <i className="fas fa-credit-card"></i> Card Number
                    </label>
                    <input 
                      type="text" 
                      placeholder="1234 5678 9012 3456"
                      value={cardNumber}
                      onChange={handleCardNumberChange}
                      maxLength={19}
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>
                        <i className="fas fa-calendar-alt"></i> Expiry Date
                      </label>
                      <input 
                        type="text" 
                        placeholder="MM/YY"
                        value={expiryDate}
                        onChange={handleExpiryDateChange}
                        maxLength={5}
                      />
                    </div>
                    <div className="form-group">
                      <label>
                        <i className="fas fa-lock"></i> CVV
                      </label>
                      <input 
                        type="password" 
                        placeholder="123"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').substring(0, 3))}
                        maxLength={3}
                      />
                    </div>
                  </div>
                  
                  <div className="save-payment">
                    <label>
                      <input 
                        type="checkbox" 
                        checked={savePaymentInfo}
                        onChange={() => setSavePaymentInfo(!savePaymentInfo)}
                      />
                      <span>Save payment information for future orders</span>
                    </label>
                  </div>
                </div>
              )}
              
              {paymentMethod === 'eft' && (
                <div className="eft-details">
                  <div className="eft-info">
                    <p><strong>Bank:</strong> WSU Student Services</p>
                    <p><strong>Account Number:</strong> 0123456789</p>
                    <p><strong>Branch Code:</strong> 012345</p>
                    <p><strong>Reference:</strong> FOOD-{studentId}</p>
                  </div>
                  <p className="eft-note">
                    <i className="fas fa-info-circle"></i>
                    Please use your student ID as reference and upload proof of payment.
                  </p>
                  <div className="upload-section">
                    <label className="upload-btn">
                      <i className="fas fa-upload"></i> Upload Proof of Payment
                      <input type="file" accept="image/*,.pdf" style={{ display: 'none' }} />
                    </label>
                  </div>
                </div>
              )}
              
              <div className="payment-total">
                <span>Total to Pay:</span>
                <span>R{total}</span>
              </div>
              
              <button 
                className={`pay-btn ${isProcessing ? 'processing' : ''}`}
                onClick={handlePayNow}
                disabled={!paymentMethod || isProcessing || (paymentMethod === 'card' && ((!cardNumber) || (!expiryDate) || (!cvv)))}
              >
                {isProcessing ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i> Processing...
                  </>
                ) : (
                  <>
                    {paymentMethod === 'cash' && 'Confirm Cash Payment'}
                    {paymentMethod === 'card' && 'Pay Now'}
                    {paymentMethod === 'eft' && 'Confirm EFT Payment'}
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
