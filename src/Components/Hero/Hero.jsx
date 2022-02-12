import React from 'react';
import hackathon from './../../assets/Hackathon/Hackathon.png'
import './Hero.css'

export const Hero = () => {
  return (
    <section className='h-screen'>
      <div className='mx-auto'>
        <img className='w-3/4 mx-auto pt-7 md:pt-20 md:pb-5' src={hackathon} alt="Hackathon" />
      </div>

      <div className='text-white font-mono flex text-xs md:text-lg justify-center items-center'>
        <span className='hero_line lg:hidden'>------</span>
        <span className='hidden hero_line lg:block'>========================================================================================</span>
        <span className='h-1 w-1 bg-white rotate-45 translate-x-0.5 md:h-3 md:w-3'></span>
        <span className='sm:text-lg' >&nbsp;Lets Hack the Future</span>
        <span className='h-1 w-1 bg-white rotate-45 translate-x-1 md:h-3 md:w-3'></span>
        <span className='hidden hero_line lg:block'>========================================================================================</span>
        <span className='hero_line lg:hidden'>------</span>
      </div>

      <div className=' bg-gray-100 pb-0 text-center my-14 grid md:flex items-center md:max-h-14 overflow-hidden box-border rounded-xl max-w-fit font-medium md:text-lg mx-auto'>
        <span className='py-2.5'>
          <span className='py-2.5 px-7 sm:px-11 '>Registration</span>|
          <span className='py-2.5 px-7 sm:px-11 '>Jan 08, 2022</span>
        </span>
        <span className='my-0 py-2.5 rounded-xl px-7 sm:px-11 bg-red-500 border-2 border-red-400 text-white font-bold s shadow-black'>OPEN</span>
      </div>
    </section>
  );
};
