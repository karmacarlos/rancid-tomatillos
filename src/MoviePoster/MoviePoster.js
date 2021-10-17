import React from 'react';
import './MoviePoster.css'
import { NavLink } from 'react-router-dom';

const MoviePoster = ( {poster, title, rating, id, displayDetails} ) => {
  return (
    <NavLink to={`${title}/${id}`}>
      <article className='poster' id={id} onClick={() => displayDetails()}>
        <img src={poster} alt='movie poster'/>
        <p>⭐️  {rating}</p>
        <p>{title}</p>
      </article>
    </NavLink>
  )
}

export default MoviePoster;