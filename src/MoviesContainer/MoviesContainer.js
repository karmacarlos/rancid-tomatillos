import React from 'react';
import './MoviesContainer.css';
import MoviePoster from '../MoviePoster/MoviePoster';

const MoviesContainer = ( {movies, displayDetails} ) => {

  const moviesCards = movies.map(movie => {
    return (
      <MoviePoster 
        id={movie.id}
        poster={movie.poster_path}
        title={movie.title}
        rating={movie.average_rating.toFixed(2)}
        key={movie.id}
        displayDetails={displayDetails}
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
