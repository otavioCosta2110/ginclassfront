import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
  return (
    <div className="header">
    logo aq
    <ul className='links'>
      <li>
        <Link className='link-item' to="/">Home</Link>
      </li>
      <li>
        <Link className='link-item' to="/classes">Classes</Link>
      </li>
    </ul>
    <Link to={'/register'} className='login'>
      Login/Register
    </Link>
    </div>
  );
}

export default Header;
