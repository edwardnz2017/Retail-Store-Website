import React from 'react';
import '../css/shopping-cart.css';
import { Link } from 'react-router-dom';

const ShoppingCart = (props) => {
  return (
    <div id='shopping-cart'>
      <div>
        {props.cartItems.map((item) => (
          <div key={item.id} className='cart-item'>
            <div id='info-div'>
              {item.image}
              {item.name}
            </div>
            <div id='price-div'>
              ${item.price}
              <div
                id='remove-div'
                onClick={() => props.deleteItem(item.uniqueId)}
              >
                Remove
              </div>
            </div>
          </div>
        ))}
      </div>
      <div id='cart-button-box'>
        <div className='cart-buttons'>
          Checkout $
          {props.cartItems.reduce((total, currentItem) => {
            return total + Number(currentItem.price);
          }, 0)}
        </div>
        <Link to='/shop' style={{ textDecoration: 'none' }}>
          <div className='cart-buttons'>Keep Shopping</div>
        </Link>
      </div>
    </div>
  );
};

export default ShoppingCart;
