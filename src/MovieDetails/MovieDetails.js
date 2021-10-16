// import { render } from '@testing-library/react'
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

  hideDetails = () => {
    this.setState({showDetails: false})
  }

  render() {
    return (
      <div className="details" style={{ backgroundImage: `url(${this.props.movie.backdrop_path})`, opacity: .5 }}>
        <button className="arrow" onClick={() => this.props.hideDetails()}>
          <img src={arrow} alt="back arrow"/>
        </button>
        <section className="movie-info">
          <h1 className="detail-title">{this.props.movie.title}</h1>
          <p className="detail-rating">⭐️ Movie Rating {this.props.movie.average_rating}</p>
          <p className="detail-overview">{this.props.movie.overview}</p>
        </section>
      </div>
    )
  }
}

export default MovieDetails