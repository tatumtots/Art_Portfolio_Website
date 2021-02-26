import React from 'react';
import '../css/nav.css';

import {Link} from 'react-router-dom';


function Nav() {
  
  return (
    <React.Fragment>
    <div id="blackbar" className="row"></div>
    <nav>
        <img src='/assets/images/TatumSignature1.png' alt="Tatum's Logo" id="logo"/>
        <ul className="navlinks" >  
          <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
            <li>Home/ </li>
          </Link>
          <Link to='/portfolio' style={{ textDecoration: 'none', color: 'black' }}>
            <li>Portfolio/ </li>
          </Link>
          <Link to='/contact' style={{ textDecoration: 'none', color: 'black' }}>
            <li>Contact/ </li>
          </Link>
          <Link to='/shop' style={{ textDecoration: 'none', color: 'black' }}>
            <li>Shop</li>
          </Link>   
        </ul>
    </nav>
    </React.Fragment>
  );
}



 
export default Nav;