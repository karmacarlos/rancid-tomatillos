import React from 'react';
import './Header.css';

const Header = () => {
    return (
      <nav className='header'>
        <h1>Rancid Tomatillos</h1>
        <ul className='nav-buttons'>
          <li>Watch List</li>
          <li>Favorites</li>
        </ul>
        <img src='' alt='user logo'/>
      </nav>
    )
  }


export { Header };