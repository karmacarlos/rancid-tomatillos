import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorComponent.css';

const ErrorComponent = () => {
  return (
    <section className='error-section' >
      <h1 className='error-h1' >We're sorry, we ran out of tomatillos :(</h1>
      <Link to={'/'}>
      <button className='home-button' >⬅ Home</button>
      </Link>
    </section>
  )
}

export default ErrorComponent;
