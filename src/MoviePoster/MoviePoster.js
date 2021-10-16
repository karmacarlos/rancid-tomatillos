import React from 'react';
import './MoviePoster.css'

const MoviePoster = ( {poster, title, rating, id, displayDetails} ) => {
  return (
    <article className='poster'>
      <button onClick={(event) => displayDetails(event)}><img src={poster} alt='movie poster' id={id}/></button>
      <div className='info-container'>
      <p>⭐️ {rating}</p>
      <p>{title}</p>
      </div>
    </article>
  )
}

export default MoviePoster;