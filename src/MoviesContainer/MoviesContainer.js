import React from 'react';
import './MoviesContainer.css';
import MoviePoster from '../MoviePoster/MoviePoster';
import { Link } from 'react-router-dom'

const MoviesContainer = ( {movies} ) => {
  const moviesCards = movies.map(movie => {

    return (
      <Link to={`/${movie.title}/${movie.id}`}>
        <MoviePoster 
        id={movie.id}
        poster={movie.poster_path}
        title={movie.title}
        rating={movie.average_rating.toFixed(2)}
        key={movie.id}
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
