import React, {Component} from 'react'
import './MovieDetails.css'
import arrow from '../arrow.svg'



const MovieDetails = ( {movie, hideDetails} ) => {
    return (
      <div className="details" style={{ backgroundImage: `linear-gradient(to top, black, 60%, transparent), url(${movie.backdrop_path})`}}>
        <button className="arrow" onClick={() => hideDetails()}>
          <img src={arrow} alt="back arrow"/>
        </button>
        <section className="movie-info">
            <h2 className="detail-title">{movie.title}</h2>
            <p className="detail-rating">⭐️ Movie Rating {movie.average_rating.toFixed(2)}</p>
            <p className="detail-overview">{movie.overview}</p>
            <p>Released date: {movie.release_date}</p>
            <p>Duration: {movie.runtime} minutes</p>
        </section>
      </div>
    )
}


export default MovieDetails