import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);

  return (
    <div>
      <h2>Cart</h2>
      {cart && cart.length > 0 ? (
        cart.map((item, index) => (
          <div key={index}>
            <p>{item.name}</p>
            <p>{item.price}</p>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
