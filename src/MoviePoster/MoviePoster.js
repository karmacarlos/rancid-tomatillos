import React from 'react';
import './MoviePoster.css'

const MoviePoster = ( {poster, title, rating, id, posterClick} ) => {
  return (
    <article className='poster'>
      <button onClick={(event) => posterClick(event)}><img src={poster} alt='movie poster' id={id}/></button>
      <div className='info-container'>
      <p>⭐️ {rating}</p>
      <p>{title}</p>
      </div>
    </article>
  )
}

export default MoviePoster;