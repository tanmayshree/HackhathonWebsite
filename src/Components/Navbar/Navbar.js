import React, { useState } from 'react';
import logo from './../../../src/assets/logo/logo-light.png'


const Navbar = () => {

    const [menu, setMenu] = useState(false);


    return (
        <>
            <nav className="hidden lg:flex items-center z-10 justify-between font-mono">
                <img className='md:h-28 lg:h-32' src={logo} alt="DCC Logo" />
                <ul className='text-white z-10 flex md:text-base lg:text-lg justify-around '>
                    <li className='cursor-pointer mx-3 hover:bg-gray-800 hover:text-red-200 border-b px-2 rounded-md hover:scale-110'>About</li>
                    <li className='cursor-pointer mx-3 hover:bg-gray-800 hover:text-red-200 border-b px-2 rounded-md hover:scale-110'>Prizes</li>
                    <li className='cursor-pointer mx-3 hover:bg-gray-800 hover:text-red-200 border-b px-2 rounded-md hover:scale-110'>Schedule</li>
                    <li className='cursor-pointer mx-3 hover:bg-gray-800 hover:text-red-200 border-b px-2 rounded-md hover:scale-110'>Sessions</li>
                    <li className='cursor-pointer mx-3 hover:bg-gray-800 hover:text-red-200 border-b px-2 rounded-md hover:scale-110'>Mentors</li>
                    <li className='cursor-pointer mx-3 hover:bg-gray-800 hover:text-red-200 border-b px-2 rounded-md hover:scale-110'>Sponsors</li>
                    <li className='cursor-pointer mx-3 hover:bg-gray-800 hover:text-red-200 border-b px-2 rounded-md hover:scale-110'>FAQs</li>
                    <li className='cursor-pointer mx-3 hover:bg-gray-800 hover:text-red-200 border-b px-2 rounded-md hover:scale-110'>Contact Us</li>
                </ul>
            </nav>

            <nav className='lg:hidden flex justify-between mx-3 text-white items-center'>
                <img className='h-20 sm:h-28' src={logo} alt="DCC Logo" />

                <div className=' m-0 z-10' onClick={() => setMenu(!menu)}>
                    <i className={!menu ? 'fas fa-globe-asia text-3xl' : 'far fa-times-circle text-3xl'} />
                </div>
            </nav>

            <div className={!menu ? 'hidden' : 'z-10'}>
                <ul className='text-white text-center font-mono text-sm'>
                    <li className='z-10 py-px mx-4 rounded shadow-sm shadow-white border-t'>About</li>
                    <li className='z-10 py-px mx-4 rounded shadow-sm shadow-white '>Prizes</li>
                    <li className='z-10 py-px mx-4 rounded shadow-sm shadow-white '>Schedule</li>
                    <li className='z-10 py-px mx-4 rounded shadow-sm shadow-white '>Sessions</li>
                    <li className='z-10 py-px mx-4 rounded shadow-sm shadow-white '>Mentors</li>
                    <li className='z-10 py-px mx-4 rounded shadow-sm shadow-white '>Sponsors</li>
                    <li className='z-10 py-px mx-4 rounded shadow-sm shadow-white '>FAQs</li>
                    <li className='z-10 py-px mx-4 rounded shadow-sm shadow-white '>Contact Us</li>
                </ul>
            </div>
        </>
    );
}

export default Navbar;