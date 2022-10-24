import React from 'react';
import { stack as Menu } from 'react-burger-menu';
import './Nav.css'

const NavMenu = (props) => {
    return (
        <Menu width={'175px'} {...props}>
            <a id="signup" className="menu-item" href="/signup">Sign Up</a>
            <a id="login" className="menu-item" href="/login">Customer Login</a>
            <a id="education" className="menu-item" href="/education">Education</a>
            <a id="provider" className="menu-item" href="/provider">Provider Login</a>
            <a id="locator" className="menu-item" href="/locator">Store Locator</a>
        </Menu>         
    );
};


export default NavMenu;