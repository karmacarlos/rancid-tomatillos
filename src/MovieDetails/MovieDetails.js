import React, {Component} from 'react'
import './MovieDetails.css'
import arrow from '../arrow.svg'


class MovieDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showDetails: true
    }
  }

  render() {
    return (
      <div className="details" style={{ backgroundImage: `linear-gradient(to top, black, 60%, transparent), url(${this.props.movie.backdrop_path})`}}>
        <button className="arrow" onClick={() => this.props.hideDetails()}>
          <img src={arrow} alt="back arrow"/>
        </button>
        <section className="movie-info">
          <div className='text-info'>
            <h2 className="detail-title">{this.props.movie.title}</h2>
            <p className="detail-rating">⭐️ Movie Rating {this.props.movie.average_rating.toFixed(2)}</p>
            <p className="detail-overview">{this.props.movie.overview}</p>
          </div>
        </section>
      </div>
    )
  }
}

export default MovieDetails