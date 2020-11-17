import React from 'react';
import { Link } from 'react-router-dom';
import cartIcon from '../misc/cart-icon.png';
import '../css/header.css';

const Header = (props) => {
  return (
    <header>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <div id='icon'>LOGO</div>
      </Link>
      <div id='header-main'>
        <div>
          <ul>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <li>HOME</li>
            </Link>
            <Link to='/shop' style={{ textDecoration: 'none' }}>
              <li>SHOP</li>
            </Link>
            <Link to='/about' style={{ textDecoration: 'none' }}>
              <li>ABOUT</li>
            </Link>
          </ul>
        </div>
        <Link to='/shopping-cart' style={{ textDecoration: 'none' }}>
          <div id='cart-details'>
            <img src={cartIcon} alt='shopping cart icon' />
            <h3>{props.cartNumber}</h3>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
