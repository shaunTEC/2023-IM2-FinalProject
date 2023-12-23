import React from 'react';
//import './Banner.css'; // Import your Banner component's CSS file
//assets
import Banner from '../assets/' 

const Banner = () => {
    const imageUrl = require('./assets/home_banner.jpg').default;
  return (
    <div className="banner">
      <div className="banner-overlay"></div>
      <img src={imageUrl} alt="Banner" className="banner-image" />
    </div>
  );
};

export default Banner;
