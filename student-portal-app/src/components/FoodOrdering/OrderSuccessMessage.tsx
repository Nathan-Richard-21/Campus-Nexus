import React from 'react';

interface OrderSuccessMessageProps {
  pickupTime: string;
  onNewOrder: () => void;
}

const OrderSuccessMessage: React.FC<OrderSuccessMessageProps> = ({ pickupTime, onNewOrder }) => {
  return (
    <div className="order-success">
      <div className="success-content">
        <div className="success-icon">
          <i className="fas fa-check-circle"></i>
        </div>
        <div className="confetti"></div>
        <h2>Order Placed Successfully!</h2>
        <p className="success-order-number">Order #WSU-{Math.floor(10000 + Math.random() * 90000)}</p>
        <div className="success-details">
          <p><i className="fas fa-utensils"></i> Your order has been received by the kitchen</p>
          <p><i className="fas fa-clock"></i> Estimated pickup time: {pickupTime === 'asap' ? 'As soon as possible' : pickupTime}</p>
          <p><i className="fas fa-envelope"></i> Confirmation sent to your student email</p>
        </div>
        <button 
          className="new-order-btn"
          onClick={onNewOrder}
        >
          Place Another Order
        </button>
      </div>
    </div>
  );
};

export default OrderSuccessMessage;
