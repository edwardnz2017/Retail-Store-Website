import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, HashRouter } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import Shop from './components/shop';
import ShoppingCart from './components/shopping-cart';
import adidas from './misc/shop-items/adidas-masks.jpg';
import assorted from './misc/shop-items/assorted-masks.jpg';
import puma from './misc/shop-items/puma-mask.jpg';
import ua from './misc/shop-items/ua-mask.jpg';
import hummel from './misc/shop-items/hummel-mask.jpg';
import looka from './misc/shop-items/looka-mask.jpg';

const Routes = () => {
  const [cartItems, setCartItems] = useState([]);

  const [catalogue] = useState([
    {
      name: 'Adidas Mask - White',
      id: 1,
      price: '30',
      image: <img src={adidas} alt='Adidas mask' />,
    },
    {
      name: 'Assorted Masks - 3 Pack',
      id: 2,
      price: '18',
      image: <img src={assorted} alt='Assorted mask' />,
    },
    {
      name: 'Puma Cloth Mask - Black',
      id: 3,
      price: '14',
      image: <img src={puma} alt='Puma mask' />,
    },
    {
      name: 'Under Armor Sports Mask - Black',
      id: 4,
      price: '20',
      image: <img src={ua} alt='UnderArmor mask' />,
    },
    {
      name: 'Hummel Mask - Pale Green',
      id: 5,
      price: '15',
      image: <img src={hummel} alt='Hummel mask' />,
    },
    {
      name: 'Looka Cloth Mask - Navy',
      id: 6,
      price: '17',
      image: <img src={looka} alt='Looka mask' />,
    },
  ]);

  const addToCart = (id) => {
    if (id === 1) {
      setCartItems([
        ...cartItems,
        {
          name: 'Adidas Mask - White',
          uniqueId: uuidv4(),
          id: 1,
          price: '30',
          image: <img src={adidas} alt='Adidas mask' />,
        },
      ]);
    } else if (id === 2) {
      setCartItems([
        ...cartItems,
        {
          name: 'Assorted Masks - 3 Pack',
          uniqueId: uuidv4(),
          id: 2,
          price: '18',
          image: <img src={assorted} alt='Assorted mask' />,
        },
      ]);
    } else if (id === 3) {
      setCartItems([
        ...cartItems,
        {
          name: 'Puma Cloth Mask - Black',
          uniqueId: uuidv4(),
          id: 3,
          price: '14',
          image: <img src={puma} alt='Puma mask' />,
        },
      ]);
    } else if (id === 4) {
      setCartItems([
        ...cartItems,
        {
          name: 'Under Armor Sports Mask - Black',
          uniqueId: uuidv4(),
          id: 4,
          price: '20',
          image: <img src={ua} alt='UnderArmor mask' />,
        },
      ]);
    } else if (id === 5) {
      setCartItems([
        ...cartItems,
        {
          name: 'Hummel Mask - Pale Green',
          uniqueId: uuidv4(),
          id: 5,
          price: '15',
          image: <img src={hummel} alt='Hummel mask' />,
        },
      ]);
    } else if (id === 6) {
      setCartItems([
        ...cartItems,
        {
          name: 'Looka Cloth Mask - Navy',
          uniqueId: uuidv4(),
          id: 6,
          price: '17',
          image: <img src={looka} alt='Looka mask' />,
        },
      ]);
    }
  };

  const deleteItem = (id) => {
    setCartItems(cartItems.filter((item) => item.uniqueId !== id));
  };

  return (
    <HashRouter basename='/'>
      <Header cartNumber={cartItems.length} />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route
          exact
          path='/shop'
          component={() => <Shop addToCart={addToCart} catalogue={catalogue} />}
        />
        <Route
          exact
          path='/shopping-cart'
          component={() => (
            <ShoppingCart cartItems={cartItems} deleteItem={deleteItem} />
          )}
        />
      </Switch>
    </HashRouter>
  );
};

export default Routes;
