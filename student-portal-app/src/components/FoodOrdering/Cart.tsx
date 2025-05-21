import React from 'react';
import { CartItem as CartItemType } from './types';

interface CartProps {
  cart: CartItemType[];
  pickupTime: string;
  onPickupTimeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onRemoveFromCart: (itemId: string) => void;
  onAddToCart: (item: CartItemType) => void;
  onClearCart: () => void;
  onCheckout: () => void;
  getTotalPrice: () => number;
}

const Cart: React.FC<CartProps> = ({ 
  cart, 
  pickupTime, 
  onPickupTimeChange, 
  onRemoveFromCart, 
  onAddToCart,
  onClearCart,
  onCheckout,
  getTotalPrice 
}) => {
  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>Your Order</h2>
        {cart.length > 0 && (
          <button className="clear-btn" onClick={onClearCart}>
            Clear
          </button>
        )}
      </div>
      
      {cart.length === 0 ? (
        <div className="empty-cart">
          <i className="fas fa-shopping-basket"></i>
          <p>Your cart is empty</p>
          <p className="empty-cart-subtext">Add items from the menu to get started</p>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="cart-item-info">
                  <div className="item-details">
                    {item.icon && <i className={`fas fa-${item.icon} cart-item-icon`}></i>}
                    <span className="item-name">{item.name}</span>
                  </div>
                  <span className="item-price">R{item.price} × {item.quantity}</span>
                </div>
                <div className="quantity-control">
                  <button 
                    onClick={() => onRemoveFromCart(item.id)}
                    aria-label="Decrease quantity"
                  >
                    <i className="fas fa-minus"></i>
                  </button>
                  <span>{item.quantity}</span>
                  <button 
                    onClick={() => onAddToCart(item)}
                    aria-label="Increase quantity"
                  >
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="order-summary">
            <h3>Order Summary</h3>
            <div className="summary-row">
              <span>Items:</span>
              <span>{cart.reduce((sum, item) => sum + item.quantity, 0)}</span>
            </div>
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>R{getTotalPrice()}</span>
            </div>
            {cart.length > 0 && (
              <div className="summary-row">
                <span>Est. Preparation:</span>
                <span>
                  {Math.max(...cart.map(item => 
                    parseInt(item.prepTime?.replace('min', '').trim() || '10')
                  ))} min
                </span>
              </div>
            )}
          </div>
          
          <div className="pickup-time">
            <label htmlFor="pickup-time">
              <i className="fas fa-clock"></i> Pickup Time:
            </label>
            <select 
              id="pickup-time" 
              value={pickupTime} 
              onChange={onPickupTimeChange}
              required
              className={!pickupTime ? 'not-selected' : ''}
            >
              <option value="">Select time</option>
              <option value="asap">As soon as possible</option>
              <option value="30min">30 minutes</option>
              <option value="1hour">1 hour</option>
              <option value="2hours">2 hours</option>
            </select>
          </div>
          
          <div className="cart-total">
            <span>Total:</span>
            <span>R{getTotalPrice()}</span>
          </div>
          
          <button 
            className="checkout-btn"
            onClick={onCheckout}
            disabled={cart.length === 0 || pickupTime === ''}
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
