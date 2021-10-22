import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorComponent.css';

const ErrorComponent = () => {
  return (
    <>
      <h1>We're sorry, we ran out of tomatillos</h1>
      <Link to={'/'}>
      <button>⬅</button>
      </Link>
    </>
  )
}

export default ErrorComponent;
