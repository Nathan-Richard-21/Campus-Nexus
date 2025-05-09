import React, { useState } from 'react';
import './FoodOrdering.css';

const FoodOrdering: React.FC = () => {
    const [order, setOrder] = useState('');
    const [message, setMessage] = useState('');

    const handleOrderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOrder(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (order) {
            setMessage(`Your order for ${order} has been placed!`);
            setOrder('');
        } else {
            setMessage('Please enter a food item to order.');
        }
    };

    return (
        <div className="food-ordering">
            <h2>Food Ordering</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={order}
                    onChange={handleOrderChange}
                    placeholder="Enter food item"
                />
                <button type="submit">Order</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default FoodOrdering;