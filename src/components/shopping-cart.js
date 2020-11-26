import React from 'react';
import '../css/shopping-cart.css';

const ShoppingCart = (props) => {
  return (
    <div id='shopping-cart'>
      <div>
        {props.cartItems.map((item) => (
          <div key={item.id}>
            {item.name}
            {item.image}
            {item.price}
          </div>
        ))}
      </div>
      <div id='cart-button-box'>
        <div className='cart-buttons'>Checkout</div>
        <div className='cart-buttons'>Keep Shopping</div>
      </div>
    </div>
  );
};

export default ShoppingCart;
