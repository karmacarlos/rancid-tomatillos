import React, { Component } from 'react';
//import { movieData } from './movieData';
import { Header } from './Header/Header';
import  MoviesContainer  from './MoviesContainer/MoviesContainer.js';
import MovieDetails from './MovieDetails/MovieDetails'
import './App.css';
import { movieData } from './movieData';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: movieData.movies,
      showMain: true,
    }
  }

  posterClick = (event) => {
    const poster = Number(event.target.id)
  
    let singleMovie = this.state.movies.filter(movie => {
      return movie.id === poster
    })

    this.setState({showMain: false, movies: singleMovie})
    console.log(this.state.movies)
  }

  render() {
    return (
      <div className="App">
        <Header />
        {this.state.showMain ? 
        <MoviesContainer movies={this.state.movies} posterClick={this.posterClick} /> : 
        <MovieDetails movie={this.state.movies[0]}/>
        }
      </div>
    )
  }
}

export default App;
