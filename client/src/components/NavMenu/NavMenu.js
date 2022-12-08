import React, { useState } from 'react';
import { stack as Menu } from 'react-burger-menu';
import './Nav.css'
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import CustLoginModal from '../Modals/CustLoginModal';
import PartLoginModal from '../Modals/PartLoginModal';
import SignUpModal from '../Modals/SignUpModal';

const NavMenu = () => {
    const [isOpen, setOpen] = useState(false);

    //modal hooks
    const [show, setShow] = useState(false);
    const [value, setValue] = useState(false);
    const [signUp, setSignUp] = useState(false);
        
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
        <>
        <Menu width={'175px'} isOpen={isOpen} onOpen={handleIsOpen} onClose={handleIsOpen}>
            <Link id="signup" className="menu-item" onClick={() => (closeMenu) (setSignUp(true))}>Sign Up</Link>
            <Link id="login" className="menu-item" onClick={() => (closeMenu) (setShow(true))}>Customer Login</Link>
            <Link id="partner" className="menu-item" onClick={() => (closeMenu) (setValue(true))}>Partner Login</Link>
            <Link id="education" to="/education" className="menu-item" onClick={closeMenu}>Education</Link>
            <Link id="locator" to="/locator" className="menu-item" onClick={closeMenu}>Store Locator</Link>
            {Auth.loggedIn() && 
                <>
                <Link id="orderHistory" to="/orderHistory" className="menu-item">Order History        </Link>
                <Link id="logout" to="/logout" className="menu-item" onClick={logout}>Logout</Link>
                
                </>
            }
        </Menu>      
        
        <CustLoginModal onClose={() => setShow(false)} show={show} />
        <PartLoginModal onClose={() => setValue(false)} show={value} />
        <SignUpModal onClose={() => setSignUp(false)} show={signUp} />
        </>
    );
};


export default NavMenu;