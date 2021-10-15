import React from 'react';
import './MoviesContainer.css';
import MoviePoster from '../MoviePoster/MoviePoster';

const MoviesContainer = ( {movies} ) => {
  const moviesCards = movies.map(movie => {
    return (
      <MoviePoster 
        poster={movie.poster_path}
        title={movie.title}
        rating={movie.average_rating.toFixed(2)}
        key={movie.id}
      />
    )
  })

  return (
    <section className='movies-container'>
      {moviesCards}
    </section>
  )
}

export default MoviesContainer;
