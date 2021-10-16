import React, { Component } from 'react';
//import { movieData } from './movieData';
import { Header } from './Header/Header';
import  MoviesContainer  from './MoviesContainer/MoviesContainer.js';
import MovieDetails from './MovieDetails/MovieDetails'
import './App.css';
import { fetchData } from './apiCalls'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      showMain: true,
    }
  }

  componentDidMount = () => {
  Promise.resolve(fetchData('movies'))
  .then(data => this.setState( { movies: data.movies } ))
  .catch(error => this.setState( { error: error.message } ))
}

  displayDetails = (event) => {
    const poster = Number(event.target.id)
    fetchData(`movies/${poster}`).then(data => {
      this.setState({showMain: false, movies: data.movie})
    })
  }

  render() {
    console.log('detail state', MovieDetails.state)
    return (
      <div className="App">
        <Header />
        {this.state.showMain ? 
        <MoviesContainer movies={this.state.movies} displayDetails={this.displayDetails} /> : 
        <MovieDetails movie={this.state.movies} hideDetails={this.hideDetails} />
        }
      </div>
    )
  }
}

export default App;
