import React from 'react';
import './Hero.css'
import Coding from './coding.svg'

export const Hero = () => {
  return (
    <section className='hero_wrapper'>
      <div className="hero_left">
        <h1 className='hero_main_title'>Hackathon</h1>
        <p className='hero_slogan'>Let's Hack The Future</p>
        <div className='hero_info'>
          <span>Registration</span>
          <span>Feb 28, 2022</span>
          <span>Register Now</span>
        </div>
      </div>
      <div className="hero_right">
        <img className='hero_img' src={Coding} alt="" />
      </div>
    </section>
  );
};
