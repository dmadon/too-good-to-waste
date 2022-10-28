import React from 'react';
import { stack as Menu } from 'react-burger-menu';
import './Nav.css'
import { Link } from 'react-router-dom';

const NavMenu = () => {
    return (
        <Menu width={'175px'} >
            <Link id="signup" to="/signup" className="menu-item">Sign Up</Link>
            <Link id="login" to="/login" className="menu-item">Customer Login</Link>
            <Link id="education" to="/education" className="menu-item">Education</Link>
            <Link id="partner" to="/partnerlogin" className="menu-item">Partner Login</Link>
            <Link id="locator" to="/locator" className="menu-item">Store Locator</Link>
        </Menu>         
    );
};


export default NavMenu;