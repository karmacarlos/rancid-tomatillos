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
      this.setState({ displayMovie: data.movie, trailers: []})
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
        <Route exact path='/' >
          <>
            <Header />
            {this.state.error && <h2>{this.state.error}</h2>}
            <MoviesContainer movies={this.state.movies} displayDetails={this.displayDetails} />
          </>
        </Route>
        <Route exact path={`/movie/${this.state.displayMovie.id}`} render={({match}) => {
          return (<MovieDetails match={`/movie/${this.state.displayMovie.id}`} movie={this.state.displayMovie} />)
          // if(!this.state.MovieDetails) {
          //   return (<h2>We are sorry, we couldn't find this movie</h2>)
          // } else {
          //   return (<MovieDetails match={`/movie/${this.state.displayMovie.id}`} movie={this.state.displayMovie} />)
          // }
        }}/>
      </div>
    )
  }
}

export default App;
