import React from 'react';
import './MoviesContainer.css';
import MoviePoster from '../MoviePoster/MoviePoster';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MoviesContainer = ( {movies} ) => {
  const moviesCards = movies.map(movie => {

    return (
      <Link to={`/${movie.title}/${movie.id}`}>
        <MoviePoster 
        key={movie.id}
        id={movie.id}
        poster={movie.poster_path}
        title={movie.title}
        rating={movie.average_rating.toFixed(2)}
        />
      </Link>
    )
  })

  return (
    <section className='movies-container'>
      {moviesCards}
    </section>
  )
}

export default MoviesContainer;

MoviesContainer.propTypes = {
  movies: PropTypes.object.isRequired
};