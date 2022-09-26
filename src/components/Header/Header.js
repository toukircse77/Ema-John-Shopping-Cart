import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <div><img src={logo} alt=""/></div>
            <div>
                <a href="/shop">Shop</a>
                <a href="/Orders">Orders</a>
                <a href="/Inventory">Inventory</a>
                <a href="/About">About</a>
            </div>
        </nav>
    );
};

export default Header;