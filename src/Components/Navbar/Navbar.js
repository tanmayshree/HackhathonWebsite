import React, { useState } from 'react';
import './navbar.css'
import logo from './../../../src/assets/logo/crop-light.png'


const Navbar = () => {

    const [menu, setMenu] = useState(false);


    return (

        <nav>
            <div className="nav_left">
                <img className='nav_logo' src={logo} alt="" />
            </div>
            <i className="nav_icon fa-solid fa-bars" />
            <ul className="nav_right nav-active">
                <li className='nav_item'>About</li>
                <li className='nav_item'>Prizes</li>
                <li className='nav_item'>Schedule</li>
                <li className='nav_item'>Mentors</li>
                <li className='nav_item'>Sponsors</li>
                <li className='nav_item'>FAQs</li>
                <li className='nav_item'>Contact Us</li>
            </ul>
        </nav>
    );
}

export default Navbar;