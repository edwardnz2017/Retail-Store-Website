import React from 'react';
import '../css/home.css';
import homePhoto from '../misc/home-photo.jpg';

const Home = () => {
  return (
    <main>
      <div id='desc-box'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Eu sem integer vitae
        justo eget magna.
      </div>
      <img id='home-photo' src={homePhoto} alt='' />
    </main>
  );
};

export default Home;
