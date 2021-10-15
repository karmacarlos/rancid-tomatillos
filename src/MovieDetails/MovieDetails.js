// import { render } from '@testing-library/react'
import React from 'react'

const MovieDetails = (props) => {
  return (
    <div className="movie-details">
        <div style={{ backgroundImage: url(props.backgroundPath) }}></div>
        <section className="movie-info">
          <h1>{props.movieTitle}</h1>
          <p>Movie Rating {props.movieRating}</p>
          <p>{props.overView}</p>
        </section>
    </div>
  )
}

export default MovieDetails