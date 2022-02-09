import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/Header.scss';
import logo from '../assets/statics/logos.png';

const Header = () => (
  <header className='Header'>
    <Link to='/' className='Header__logo'>
      <figure>
        <img src={logo} alt='Blog logo' />
      </figure>
      <span>Blog</span>
    </Link>
  </header>
);

export default Header;
