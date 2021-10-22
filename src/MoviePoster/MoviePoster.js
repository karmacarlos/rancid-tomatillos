import React from 'react';
import './MoviePoster.css'

const MoviePoster = ( {poster, title, rating, id} ) => {
  return (

      <article className='poster' id={id}>
        <img src={poster} alt='movie poster'/>
        <p>⭐️  {rating}</p>
        <p>{title}</p>
      </article>

  )
}

export default MoviePoster;