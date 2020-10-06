import React from 'react';
import logo from '../images/tvm-header-logo.png'
import './styles/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return ( 
        <div className="header__container">
            <Link to={'/'}>
                <img src={logo} alt=""/>
            </Link>
        </div>
    );
}
 
export default Header;