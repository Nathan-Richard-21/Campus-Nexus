import React from 'react';
import { MenuItem } from './types';

interface MenuItemProps {
  item: MenuItem;
  onAddToCart: (item: MenuItem) => void;
}

const MenuItemComponent: React.FC<MenuItemProps> = ({ item, onAddToCart }) => {
  return (
    <div className="menu-item" id={item.id}>
      {item.image && (
        <div className="item-image" style={{ backgroundImage: `url(${item.image})` }}></div>
      )}
      <div className="item-info">
        <div className="item-header">
          <h3>{item.name}</h3>
          {item.icon && <i className={`fas fa-${item.icon} item-icon`}></i>}
        </div>
        <p className="price">R{item.price}</p>
        {item.description && <p className="description">{item.description}</p>}
        
        <div className="item-meta">
          {item.prepTime && (
            <span className="prep-time">
              <i className="fas fa-clock"></i> {item.prepTime}
            </span>
          )}
          
          <div className="tags-container">
            {item.tags && item.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
      <button 
        className="add-btn"
        onClick={() => onAddToCart(item)}
        title="Add to order"
      >
        <i className="fas fa-plus"></i>
      </button>
    </div>
  );
};

export default MenuItemComponent;
