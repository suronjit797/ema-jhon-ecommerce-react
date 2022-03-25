import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/Logo.svg'


import './Header.css'

const Header = () => {
    return (
        <nav className='main-header'>
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="" className="logo" />
                </Link>
            </div>
            <ul className="menu">
                <li className="menu_item"><Link to="/shop">Shop</Link></li>
                <li className="menu_item"><Link to="/review">Order Review</Link></li>
                <li className="menu_item"><Link to="/inventory"> Order Inventory </Link></li>
            </ul>
        </nav>
    );
};

export default Header;