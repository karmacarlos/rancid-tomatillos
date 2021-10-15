import React from 'react';
import './MoviePoster.css'

const MoviePoster = ( {poster, title, rating}) => {
  return (
    <article className='poster'>
      <img src={poster} alt='movie poster'/>
      <div>
      <p>⭐️ {rating}</p>
      <p>{title}</p>
      </div>
    </article>
  )
}

export default MoviePoster;