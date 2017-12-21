import React from 'react';
import AppTitle from '../AppTitle';
import Search from '../Search';
import './Header.css';

const Header = () => (
  <div className="Header">
    <AppTitle />
    <Search />
  </div>
);

export default Header;
