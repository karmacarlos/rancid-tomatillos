import React from 'react';
import './MoviePoster.css'
import { Link } from 'react-router-dom';

const MoviePoster = ( {poster, title, rating, id, displayDetails} ) => {
  return (
    <Link to={`movie/${id}`}>
      <article className='poster' id={id} onClick={(event) => displayDetails(event)}>
        <img src={poster} alt='movie poster'/>
        <p>⭐️  {rating}</p>
        <p>{title}</p>
      </article>
    </Link>
  )
}

export default MoviePoster;