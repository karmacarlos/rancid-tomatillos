// import { render } from '@testing-library/react'
import React from 'react'
import './MovieDetails.css'

const MovieDetails = ( {movie} ) => {
  return (
    <div className="details" style={{ backgroundImage: `url(${movie.backdrop_path})`}}>
      <section className="movie-info">
        <h1 className="detail-title">{movie.title}</h1>
        <p>Movie Rating {movie.average_rating}</p>
        <p>{movie.overView}</p>
      </section>
    </div>

  )
}

export default MovieDetails