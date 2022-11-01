import React, { useState } from 'react';
import { stack as Menu } from 'react-burger-menu';
import './Nav.css'
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';


const NavMenu = () => {
    const [isOpen, setOpen] = useState(false);
    
    const handleIsOpen = () => {
        setOpen(!isOpen)
    }

    const closeMenu = () => {
        setOpen(false)
    }

    //function to log out
    const logout = event => {
        event.preventDefault();

        Auth.logout();
    };

    return (
        <Menu width={'175px'} isOpen={isOpen} onOpen={handleIsOpen} onClose={handleIsOpen}>
            <Link id="signup" to="/signup" className="menu-item" onClick={closeMenu}>Sign Up</Link>
            <Link id="login" to="/login" className="menu-item" onClick={closeMenu}>Customer Login</Link>
            <Link id="partner" to="/partnerlogin" className="menu-item" onClick={closeMenu}>Partner Login</Link>
            <Link id="education" to="/education" className="menu-item" onClick={closeMenu}>Education</Link>
            <Link id="locator" to="/locator" className="menu-item" onClick={closeMenu}>Store Locator</Link>
            {Auth.loggedIn() && <Link id="logout" to="/logout" className="menu-item" onClick={logout}>Logout</Link>}
        </Menu>        
    );
};


export default NavMenu;