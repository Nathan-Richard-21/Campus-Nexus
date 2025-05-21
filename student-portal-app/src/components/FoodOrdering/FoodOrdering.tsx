import React, { useState, useEffect } from 'react';
import './FoodOrdering.css';
import { MenuItem, CartItem } from './types';
import OrderModal from './OrderModal';
import PaymentModal from './PaymentModal';
import OrderSuccessMessage from './OrderSuccessMessage';
import MenuItemComponent from './MenuItemComponent';
import Cart from './Cart';

const FoodOrdering: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [activeCampus, setActiveCampus] = useState('All Campuses');
  
  // Campus options for WSU
  const campusOptions = [
    'All Campuses',
    'Buffalo City Campus',
    'Butterworth Campus',
    'Mthatha Campus',
    'Queenstown Campus'
  ];

  // Simulate loading data
  useEffect(() => {
    // Simulate API call to fetch menu items
    const loadData = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    };
    
    loadData();
  }, []);
  
  const [menuItems] = useState<MenuItem[]>([
    // Main Menu
    { 
      id: 'cm1', 
      name: 'Grilled Chicken Meal', 
      price: 50, 
      category: 'Main Menu', 
      description: 'Tender grilled chicken served with seasonal vegetables and your choice of starch',
      image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&q=80&w=500',
      icon: 'drumstick-bite',
      tags: ['Popular', 'Protein'],
      prepTime: '15 min',
      campus: 'Buffalo City Campus'
    },
    { 
      id: 'bm1', 
      name: 'Traditional Beef Stew', 
      price: 60, 
      category: 'Main Menu', 
      description: 'Hearty beef stew slow-cooked with vegetables and rich gravy',
      image: 'https://images.unsplash.com/photo-1608877907149-a5c32df974c5?auto=format&fit=crop&q=80&w=500',
      icon: 'utensils',
      tags: ['Hearty', 'Traditional'],
      prepTime: '20 min',
      campus: 'Mthatha Campus'
    },
    { 
      id: 'cl1', 
      name: 'Spicy Chicken Livers', 
      price: 25, 
      category: 'Main Menu',
      description: 'Pan-fried chicken livers with a spicy peri-peri sauce',
      icon: 'pepper-hot',
      tags: ['Spicy'],
      prepTime: '10 min',
      campus: 'Buffalo City Campus'
    },
    { 
      id: 'sg1', 
      name: 'Samp & Bean Gravy', 
      price: 20, 
      category: 'Main Menu',
      description: 'Traditional South African samp and beans with savory gravy',
      icon: 'seedling',
      tags: ['Vegetarian', 'Traditional'],
      prepTime: '15 min',
      campus: 'Butterworth Campus'
    },
    { 
      id: 'bs1', 
      name: 'Homestyle Beef Stew', 
      price: 40, 
      category: 'Main Menu',
      description: 'Tender beef chunks in a rich tomato gravy with vegetables',
      icon: 'fire',
      tags: ['Hearty', 'Staff Pick'],
      prepTime: '20 min',
      campus: 'Queenstown Campus'
    },
    { 
      id: 'cs1', 
      name: 'Creamy Chicken Stew', 
      price: 35, 
      category: 'Main Menu',
      description: 'Chicken in a creamy mushroom sauce with mixed vegetables',
      icon: 'drumstick-bite',
      tags: ['Creamy'],
      prepTime: '15 min',
      campus: 'Mthatha Campus'
    },
    { 
      id: 'ch1', 
      name: 'Grilled Chicken Hearts', 
      price: 20, 
      category: 'Main Menu',
      description: 'Marinated and grilled chicken hearts with special spices',
      icon: 'heart',
      tags: ['Traditional', 'Unique'],
      prepTime: '10 min'
    },
    { 
      id: 's1', 
      name: 'Boerewors Sausage', 
      price: 30, 
      category: 'Main Menu',
      description: 'Traditional South African sausage grilled to perfection',
      icon: 'hotdog',
      tags: ['Student Favorite'],
      prepTime: '10 min',
      campus: 'All Campuses'
    },
    
    // Extras & Sides
    { 
      id: 'fs1', 
      name: 'Fresh Fruit Salad', 
      price: 35, 
      category: 'Extras & Sides',
      description: 'Seasonal fruits with yogurt and a drizzle of honey',
      image: 'https://images.unsplash.com/photo-1570696516188-ade861b84a49?auto=format&fit=crop&q=80&w=500',
      icon: 'apple-alt',
      tags: ['Healthy', 'Sweet'],
      prepTime: '5 min',
      campus: 'All Campuses'
    },
    { 
      id: 'p1', 
      name: 'Creamy Pasta', 
      price: 30, 
      category: 'Extras & Sides',
      description: 'Pasta in a creamy cheese sauce with herbs',
      icon: 'utensils',
      tags: ['Vegetarian'],
      prepTime: '12 min',
      campus: 'Buffalo City Campus'
    },
    { 
      id: 'u1', 
      name: 'Traditional Ulusu', 
      price: 30, 
      category: 'Extras & Sides',
      description: 'Traditional tripe dish prepared with special spices',
      icon: 'utensils',
      tags: ['Traditional'],
      prepTime: '20 min'
    },
    { 
      id: 'po1', 
      name: 'Grilled Pork Chops', 
      price: 35, 
      category: 'Extras & Sides',
      description: 'Juicy pork chops marinated and grilled',
      icon: 'bacon',
      tags: ['Chef Special'],
      prepTime: '15 min'
    },
    { 
      id: 'bst1', 
      name: 'Premium Beef Steak', 
      price: 45, 
      category: 'Extras & Sides',
      description: 'Tender beef steak grilled to your preference',
      icon: 'fire-alt',
      tags: ['Premium', 'Protein'],
      prepTime: '15 min'
    },
    { 
      id: 'wo1', 
      name: 'Crispy Wings Only', 
      price: 35, 
      category: 'Extras & Sides',
      description: 'Crispy chicken wings with your choice of sauce',
      icon: 'drumstick-bite',
      tags: ['Shareable'],
      prepTime: '12 min'
    },
    { 
      id: 'ql1', 
      name: 'Quarter Chicken Leg', 
      price: 33, 
      category: 'Extras & Sides',
      description: 'Juicy quarter chicken leg roasted to perfection',
      icon: 'drumstick-bite',
      tags: ['Popular'],
      prepTime: '15 min'
    },
    { 
      id: 'la1', 
      name: 'Beef Lasagne', 
      price: 35, 
      category: 'Extras & Sides',
      description: 'Layered pasta with beef ragù and cheese sauce',
      icon: 'cheese',
      tags: ['Hearty'],
      prepTime: '15 min'
    },
    { 
      id: 'cw1', 
      name: 'Grilled Chicken Wrap', 
      price: 35, 
      category: 'Extras & Sides',
      description: 'Grilled chicken with fresh veggies in a warm wrap',
      icon: 'bread-slice',
      tags: ['Easy Grab'],
      prepTime: '10 min'
    },
    
    // Quick Bites
    { 
      id: 'pi1', 
      name: 'Savory Pies', 
      price: 23, 
      category: 'Quick Bites',
      description: 'Flaky pastry filled with chicken or beef',
      icon: 'cookie',
      tags: ['Quick Grab'],
      prepTime: '2 min'
    },
    { 
      id: 'sb1', 
      name: 'Fresh Steam Bread', 
      price: 8, 
      category: 'Quick Bites',
      description: 'Traditional steamed bread, freshly made',
      icon: 'bread-slice',
      tags: ['Traditional', 'Side'],
      prepTime: '2 min'
    },
    { 
      id: 'sw1', 
      name: 'Club Sandwich', 
      price: 17, 
      category: 'Quick Bites',
      description: 'Triple-decker sandwich with chicken, bacon, and egg',
      icon: 'hamburger',
      tags: ['Student Favorite'],
      prepTime: '5 min'
    },
    { 
      id: 'gi1', 
      name: 'Crispy Gizzards', 
      price: 25, 
      category: 'Quick Bites',
      description: 'Crispy fried chicken gizzards with special seasoning',
      icon: 'drumstick-bite',
      tags: ['Unique'],
      prepTime: '10 min'
    },
    { 
      id: 'ol1', 
      name: 'Spiced Ox Liver', 
      price: 30, 
      category: 'Quick Bites',
      description: 'Pan-fried ox liver with onions and spices',
      icon: 'pepper-hot',
      tags: ['Traditional'],
      prepTime: '10 min'
    },
    { 
      id: 'bu1', 
      name: 'Campus Burger', 
      price: 40, 
      category: 'Quick Bites',
      description: 'Beef patty with cheese, lettuce, and special sauce',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=500',
      icon: 'hamburger',
      tags: ['Popular', 'Student Favorite'],
      prepTime: '8 min',
      campus: 'All Campuses'
    },
    { 
      id: 'wc1', 
      name: 'Wings & Chips Combo', 
      price: 45, 
      category: 'Quick Bites',
      description: 'Crispy chicken wings with a side of golden chips',
      image: 'https://images.unsplash.com/photo-1623238913973-21c368bf63c3?auto=format&fit=crop&q=80&w=500',
      icon: 'drumstick-bite',
      tags: ['Combo', 'Shareable'],
      prepTime: '12 min',
      campus: 'Queenstown Campus'
    },
    { 
      id: 'qc1', 
      name: 'Quarter & Chips Combo', 
      price: 40, 
      category: 'Quick Bites',
      description: 'Quarter chicken leg with a side of golden chips',
      icon: 'drumstick-bite',
      tags: ['Combo', 'Value'],
      prepTime: '15 min'
    },

    // Beverages
    { 
      id: 'sc1', 
      name: 'Soft Drinks', 
      price: 15, 
      category: 'Beverages',
      description: 'Various cold soft drinks (330ml)',
      icon: 'glass',
      tags: ['Cold'],
      prepTime: '1 min'
    },
    { 
      id: 'jc1', 
      name: 'Fresh Juice', 
      price: 20, 
      category: 'Beverages',
      description: 'Freshly squeezed seasonal fruit juices',
      image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&q=80&w=500',
      icon: 'blender',
      tags: ['Healthy', 'Fresh'],
      prepTime: '3 min'
    },
    { 
      id: 'ms1', 
      name: 'Milkshake', 
      price: 25, 
      category: 'Beverages',
      description: 'Creamy milkshake in various flavors',
      icon: 'ice-cream',
      tags: ['Cold', 'Sweet'],
      prepTime: '5 min'
    },
    { 
      id: 'cf1', 
      name: 'Coffee', 
      price: 18, 
      category: 'Beverages',
      description: 'Freshly brewed coffee',
      icon: 'coffee',
      tags: ['Hot', 'Popular'],
      prepTime: '3 min'
    },
    { 
      id: 'te1', 
      name: 'Tea', 
      price: 15, 
      category: 'Beverages',
      description: 'Various tea selections',
      icon: 'mug-hot',
      tags: ['Hot'],
      prepTime: '2 min'
    }
  ]);
  
  const [cart, setCart] = useState<CartItem[]>([]);
  const [activeCategory, setActiveCategory] = useState('Main Menu');
  const [search, setSearch] = useState('');
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [orderCompleted, setOrderCompleted] = useState(false);
  const [pickupTime, setPickupTime] = useState('');

  const addToCart = (item: MenuItem) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
    
    // Animation trigger for the item
    const element = document.getElementById(item.id);
    if (element) {
      element.classList.add('added-to-cart');
      setTimeout(() => {
        element?.classList.remove('added-to-cart');
      }, 500);
    }
  };

  const removeFromCart = (itemId: string) => {
    const existingItem = cart.find((item) => item.id === itemId);
    if (existingItem && existingItem.quantity > 1) {
      setCart(
        cart.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    } else {
      setCart(cart.filter((item) => item.id !== itemId));
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  
  const handlePickupTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPickupTime(e.target.value);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleCheckout = () => {
    setIsOrderModalOpen(true);
  };
  
  const handleOrderConfirm = () => {
    setIsOrderModalOpen(false);
    setIsPaymentModalOpen(true);
  };
  
  const handlePaymentComplete = (paymentMethod: string) => {
    setIsPaymentModalOpen(false);
    setOrderCompleted(true);
    // Reset after 5 seconds
    setTimeout(() => {
      setOrderCompleted(false);
      clearCart();
    }, 5000);
  };

  const filteredItems = menuItems.filter(item => 
    (activeCategory === 'All' || item.category === activeCategory) &&
    (search === '' || item.name.toLowerCase().includes(search.toLowerCase())) &&
    (activeCampus === 'All Campuses' || item.campus === activeCampus || item.campus === 'All Campuses')
  );

  // Create categories array - alternative to using Set to avoid TS errors
  const uniqueCategories = ['All'];
  menuItems.forEach(item => {
    if (!uniqueCategories.includes(item.category)) {
      uniqueCategories.push(item.category);
    }
  });

  return (
    <div className="food-ordering-container">
      <div className="food-header">
        <h1>University Restaurant</h1>
        <p>Skip the line. Order ahead!</p>
        
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search menu..." 
            value={search}
            onChange={handleSearch}
            className="search-input"
          />
          <i className="fas fa-search search-icon"></i>
        </div>
        
        <div className="campus-selector">
          <label htmlFor="campus-select">
            <i className="fas fa-university"></i> Select Campus:
          </label>
          <select 
            id="campus-select" 
            value={activeCampus}
            onChange={(e) => setActiveCampus(e.target.value)}
          >
            {campusOptions.map(campus => (
              <option key={campus} value={campus}>{campus}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="categories-container">
        {uniqueCategories.map(category => (
          <button
            key={category}
            className={`category-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="menu-container">
        <div className="menu-items">
          {loading ? (
            <div className="loading-container">
              <div className="loader"></div>
              <p>Loading menu items...</p>
            </div>
          ) : filteredItems.length === 0 ? (
            <div className="no-results">
              <i className="fas fa-search"></i>
              <h3>No menu items found</h3>
              <p>Try adjusting your filters or search term</p>
            </div>
          ) : (
            filteredItems.map((item) => (
              <MenuItemComponent 
                key={item.id}
                item={item}
                onAddToCart={addToCart}
              />
            ))
          )}
        </div>
        
        <Cart 
          cart={cart}
          pickupTime={pickupTime}
          onPickupTimeChange={handlePickupTimeChange}
          onRemoveFromCart={removeFromCart}
          onAddToCart={addToCart}
          onClearCart={clearCart}
          onCheckout={handleCheckout}
          getTotalPrice={getTotalPrice}
        />
      </div>

      {/* Order Confirmation Modal */}
      {isOrderModalOpen && (
        <OrderModal 
          cart={cart} 
          total={getTotalPrice()} 
          pickupTime={pickupTime}
          onClose={() => setIsOrderModalOpen(false)}
          onConfirm={handleOrderConfirm}
        />
      )}

      {/* Payment Modal */}
      {isPaymentModalOpen && (
        <PaymentModal 
          total={getTotalPrice()}
          onClose={() => setIsPaymentModalOpen(false)}
          onPaymentComplete={handlePaymentComplete}
        />
      )}

      {/* Order Success Message */}
      {orderCompleted && (
        <OrderSuccessMessage 
          pickupTime={pickupTime}
          onNewOrder={() => setOrderCompleted(false)}
        />
      )}
    </div>
  );
};

export default FoodOrdering;