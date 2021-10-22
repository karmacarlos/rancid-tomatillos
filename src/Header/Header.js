import React from 'react';
//import logo from '../user-icon.svg'
import './Header.css';
import Binoculars from '../binoculars.svg';
import Favorite from '../star.svg';

const Header = () => {
    return (
      <nav className='header'>
        <h1 className='title'>Rancid Tomatillos</h1>
        <section className='nav-buttons'>
          <h2 className='watch-list'>Watch List</h2>
          <img className='icon' src={Binoculars} alt="binoculars"/>
          <h2>Favorites</h2>
          <img className='icon' src={Favorite} alt='star' />
        </section>
      </nav>
    )
  }

export { Header };