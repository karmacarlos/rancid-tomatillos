import React, { Component } from 'react'
import './MovieDetails.css'
import arrow from '../../arrow.svg'
import { Link, Redirect } from 'react-router-dom';
import { fetchData } from '../../apiCalls'
import PropTypes from 'prop-types';



class MovieDetails extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      movie: {},
      trailer: "",
      error: "",
      added: false,
    }
  }
    componentDidMount() {
      Promise.all([
        fetchData(`movies/${parseInt(this.props.match.params.id)}`),
        fetchData(`movies/${parseInt(this.props.match.params.id)}/videos`)
      ])
        .then(data => {
        return this.setState({ 
          movie: data[0].movie,
          trailer: data[1].videos[0].key,
        })
      })
      .catch(error => this.setState( { error: 'Something went wrong, please try again later' } ))
    }

  render() {
    return (
      <>
        {(this.state.error || !this.state.movie) && <Redirect to='/error' />}
     { this.state.movie &&  
        <section className="details" style={{ backgroundImage: `linear-gradient(to top, black, 50%, transparent), url(${this.state.movie.backdrop_path})`}}>
          <Link to={'/'}>
            <button className="arrow">
              <img src={arrow} alt="back arrow"/>
            </button>
          </Link>
          <iframe
            width="400"
            height="250"
            src={`https://www.youtube.com/embed/${this.state.trailer}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
          <section className="movie-info">
            <h2 className="detail-title">{this.state.movie.title}</h2>
            <p className="detail-rating">⭐️ Movie Rating {Math.round(this.state.movie.average_rating * 10)/10}</p>
            <p className="detail-overview">{this.state.movie.overview}</p>
            <p>Released date: {this.state.movie.release_date}</p>
            <p>Duration: {this.state.movie.runtime} minutes</p>
            <button className='watchlist-button' onClick={(event) => {
              this.setState( {added: true} )
              this.props.addToWatchList(event, this.state.movie.id)
            }
            } >Add to watch List</button>
            { this.state.added && <p>Added to your watch list</p>}
          </section>
        </section>
      }
      </>
    )
  }
}


export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.string.isRequired,
  addToWatchList: PropTypes.func.isRequired
};