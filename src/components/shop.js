import React, { useState } from 'react';
import '../css/shop.css';

const Shop = (props) => {
  return (
    <main id='catalogue'>
      {props.catalogue.map((item) => (
        <div key={item.id} className='item-card'>
          {item.image}
          <div>
            <strong>{item.name}</strong>
          </div>
          <div>${item.price}</div>
          <div id='add-button' onClick={() => props.addToCart(item.id)}>
            Add To Cart
          </div>
        </div>
      ))}
    </main>
  );
};

export default Shop;
