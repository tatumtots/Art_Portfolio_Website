import React from 'react';
import './css/nav.css';
import {Link} from 'react-router-dom';

function Nav() {
  
  return (
    <nav>
        <img src="" alt="Tatum's Logo" id="logo"/>
        <ul className="navlinks">  
          <Link to='/' style={navStyle}>
            <li>Home</li>
          </Link>
          <Link to='/portfolio'style={navStyle}>
            <li>Portfolio</li>
          </Link>
          <Link to='/contact'style={navStyle}>
            <li>Contact</li>
          </Link>
          <Link to='/shop'style={navStyle}>
            <li>Shop</li>
          </Link>
            
        </ul>
    </nav>
  );
}
 const navStyle ={
   color: 'white'
 }
export default Nav;