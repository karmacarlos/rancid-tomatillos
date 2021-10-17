import React, { Component } from 'react';
import { Header } from './Header/Header';
import  MoviesContainer  from './MoviesContainer/MoviesContainer.js';
import MovieDetails from './MovieDetails/MovieDetails';
import './App.css';
import { fetchData } from './apiCalls';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      showMain: true,
      error: '',
      displayMovie: {},
      trailers: [],
    }
  }

  componentDidMount = () => {
  Promise.resolve(fetchData('movies'))
  .then(data => this.setState( { movies: data.movies } ))
  .catch(error => this.setState( { error: 'Something went wrong, please try again later' } ))
}

  displayDetails = (event) => {
    const poster = Number(event.target.parentNode.id)
    Promise.resolve(
      fetchData(`movies/${poster}`)
      .then(data => {
      this.setState({showMain: false, displayMovie: data.movie, trailers: []})
    })).then(() => {
      fetchData(`movies/${poster}/videos`)
      .then(data => this.setState( { trailers: data.videos } ))
    })
  }

  hideDetails = () => {
    this.setState({showMain: true})
  }

  render() {
    return (
      <div className="App">
        <Route path='/' render={({match}) => {
          <>
            <Header />
            <MoviesContainer movies={this.state.movies} displayDetails={this.displayDetails} />
          </>
        }}
        />
        <Route path={`/${this.state.displayMovie.title}/${this.state.displayMovie.id}`} render={({match}) => {
          <MovieDetails movie={this.state.displayMovie} hideDetails={this.hideDetails}/>
        }}
        />
      </div>
    )
  }
}

export default App;
