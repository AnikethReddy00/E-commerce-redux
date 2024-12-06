import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const counts = useSelector((state) => state.counter.counts); // Get counts object from the store
  const images = ['/images/img1.png', '/images/img2.png', '/images/img3.png'];

  return (
    <div className="cart-container p-4">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      {Object.keys(counts).length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="cart-list">
          {Object.keys(counts).map((image, index) => (
            <li
              key={index}
              className="cart-item flex justify-between items-center mb-2 border p-2 rounded"
            >
              <div className="item-info">
                <img src={image} className='h-[5vh]' alt="" />
                <p>Quantity: {counts[image]}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
