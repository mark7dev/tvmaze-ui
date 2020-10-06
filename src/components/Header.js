import React from 'react';
import logo from '../images/tvm-header-logo.png'
import './styles/Header.css';

const Header = () => {
    return ( 
        <div className="header__container">
            <img src={logo} alt=""/>
        </div>
    );
}
 
export default Header;