import React from 'react';
import '../css/footer.css';
import { GrInstagram } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import {Link} from 'react-router-dom';

function Footer() {
    return(
    <div id="footer">
      <div className="ftext">Website By Tatum Bray 2021</div>
      <span className="icons">
        <GrInstagram style={{  color: 'white' }}> </GrInstagram>
        <FaFacebook style={{ color: 'white' }}></FaFacebook>
      </span>
      <div>
        <span>
          <ul className="navLinks">  
            <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
              <li>Home/ </li>
            </Link>
            <Link to='/portfolio' style={{ textDecoration: 'none', color: 'white' }}>
              <li>Portfolio/ </li>
            </Link>
            <Link to='/contact' style={{ textDecoration: 'none', color: 'white' }}>
              <li>Contact/ </li>
            </Link>
            <Link to='/shop' style={{ textDecoration: 'none', color: 'white' }}>
              <li>Shop</li>
            </Link>   
          </ul>
        </span>
      </div>
  </div>
    );
}

export default Footer;