import React, { Component } from 'react'
import './MovieDetails.css'
import arrow from '../arrow.svg'
import { Link } from 'react-router-dom';
import { fetchData } from '../apiCalls'


class MovieDetails extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      movie: {},
      trailer: "",
      error: ""
    }
  }
    componentDidMount() {
      console.log(this.props)
      Promise.resolve(
        fetchData(`movies${parseInt(this.props.match.params.id)}`)
        .then(data => {
        this.setState({ movie: data.movie })
      })
      .catch(error => this.setState( { error: 'Something went wrong, please try again later' } ))
      )
      .then(() => {
        fetchData(`movies/${parseInt(this.props.match.params.id)}/videos`)
        .then(data => this.setState( { trailer: data.videos[0].key } ))
        .catch(error => this.setState( { error: 'Something went wrong, please try again later' } ))
      })
    }

  render() {
    return (
      <main>
        {this.state.error && <h1>{this.state.error}</h1>}
     { this.state.movie &&  
        <div className="details" style={{ backgroundImage: `linear-gradient(to top, black, 60%, transparent), url(${this.state.movie.backdrop_path})`}}>
          <Link to={'/'}>
            <button className="arrow">
              <img src={arrow} alt="back arrow"/>
            </button>
          </Link>
          <iframe
            width="500"
            height="350"
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
          </section>
        </div>
      }
      </main>
    )
  }
}


export default MovieDetails