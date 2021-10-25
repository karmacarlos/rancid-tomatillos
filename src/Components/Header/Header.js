import React from 'react';
import './Header.css';
import Binoculars from '../../binoculars.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <header>
        <nav className='header'>
          <Link to='/' >
            <h1 className='title'>Rancid Tomatillos</h1>
          </Link>
           
              <Link to='/watchlist' aria-label="link to watch list">
                <ul>
                <li aria-label="watch list" className='watch-list'>Watch List <img className='icon' src={Binoculars} alt="binoculars"/></li>
                </ul>
              </Link>
              <ul>
                <li aria-label="user" className='user'>User test</li>
                </ul>
         
        </nav>
      </header>
    )
  }

export { Header };