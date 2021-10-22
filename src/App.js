import React, { Component } from 'react';
import { Header } from './Header/Header';
import  MoviesContainer  from './MoviesContainer/MoviesContainer.js';
import MovieDetails from './MovieDetails/MovieDetails';
import './App.css';
import { fetchData } from './apiCalls';
import { Route } from 'react-router-dom';
import ErrorComponent from './ErrorComponent/ErrorComponent';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      error: '',
    }
  }

  componentDidMount = () => {
  Promise.resolve(fetchData('movies'))
  .then(data => this.setState( { movies: data.movies } ))
  .catch(error => this.setState( { error: 'Something went wrong, please try again later' } ))
}

  render() {
    return (
      <div className="App">
        <Route exact path='/' >
          <>
            <Header />
            {this.state.error && <h3 id='error'>{this.state.error}</h3>}
            <MoviesContainer movies={this.state.movies} />
          </>
        </Route>
        <Route exact path={`/:movie/:id`} render={( {match} ) => {
         return <MovieDetails match={match} />
        }}/>
        <Route exact path={'/error'} render={( {match} ) => <ErrorComponent /> }/>
      </div>
    )
  }
}

export default App;
