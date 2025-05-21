import React from 'react';
import { OrderModalProps } from './types';

const OrderModal: React.FC<OrderModalProps> = ({ 
  cart, 
  total, 
  pickupTime, 
  onClose, 
  onConfirm 
}) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Order Confirmation</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        <div className="modal-content">
          <h3>Order Summary</h3>
          {cart.map((item) => (
            <div className="order-item" key={item.id}>
              <span>{item.name} × {item.quantity}</span>
              <span>R{item.price * item.quantity}</span>
            </div>
          ))}
          <div className="order-total">
            <span>Total:</span>
            <span>R{total}</span>
          </div>
          <div className="pickup-info">
            <p><strong>Pickup Time:</strong> {pickupTime === 'asap' ? 'As soon as possible' : pickupTime}</p>
          </div>
          <button className="confirm-btn" onClick={onConfirm}>
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
