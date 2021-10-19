import React from 'react'
import './MovieDetails.css'
import arrow from '../arrow.svg'
import { Link } from 'react-router-dom';



const MovieDetails = ( {movie} ) => {
    return (
        <div className="details" style={{ backgroundImage: `linear-gradient(to top, black, 60%, transparent), url(${movie.backdrop_path})`}}>
          <Link to={'/'}>
          <button className="arrow">
            <img src={arrow} alt="back arrow"/>
          </button>
          </Link>
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