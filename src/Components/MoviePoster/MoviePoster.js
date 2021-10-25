import React from 'react';
import './MoviePoster.css';
import PropTypes from 'prop-types';

const MoviePoster = ( {poster, title, rating, id} ) => {
  return (
      <article className='poster' id={id}>
        <img src={poster} alt={`${title} poster`}/>
        <p aria-label="movie rating">⭐️  {rating}</p>
        <p aria-label="movie title">{title}</p>
      </article>
  )
}

export default MoviePoster;

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};