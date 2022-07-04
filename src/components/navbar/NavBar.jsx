import React from 'react';
import { RiMenu3Line, RiCloseLin } from 'react-icons';
import './navbar.css';
import logo from '../../assets/logo.png';

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="navbar-links">
                <div className="navbar-links_logo">
                    <img src={logo} alt="logo" />
                </div>

                <div className='navbar-links_container'>
                    <p><a href="#home">Home</a></p>
                    <p><a href="#what">What is UI UX</a></p>
                    <p><a href="#possibility">Open AI</a></p>
                    <p><a href="#features">Case Studies</a></p>
                    <p><a href="#blog">Library</a></p>
                </div>
            </div>
        </div>
    )
}

export default NavBar
