// src/Hero.jsx
import React from 'react';
import MobileHeroImage from '../assets/images/mobile-hero-img.png';


const Hero = () => {
  return (
    <div className=" flex flex-col justify-center items-center text-center mt-10">
      <h1 className="text-6xl md:text-8xl  mb-4 text-[#061C2C]"><strong className="font-bold text-[#FECA1F]">Phase 3</strong> Residence</h1>
      <p className="text-xl md:text-2xl italic ">House of Champions, Home of Excellence</p>
      <br />
      <img src={MobileHeroImage} alt="mobile hero image of building" className=""/>
    </div>
  );
};

export default Hero;
