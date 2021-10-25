import React, { Component } from 'react';
import { Header } from '../Header/Header';
import  MoviesContainer  from '../MoviesContainer/MoviesContainer.js';
import MovieDetails from '../MovieDetails/MovieDetails';
import './App.css';
import { fetchData, postDataExpress, fetchDataExpress } from '../../apiCalls';
import { Route } from 'react-router-dom';
import ErrorComponent from '../ErrorComponent/ErrorComponent';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      error: '',
      watchListIds: [],
      watchListMovies: [],
    }
  }

  componentDidMount = () => {
    Promise.resolve(fetchData('movies'))
      .then(data => {
        this.setState( { 
          movies: data.movies, 
        })
      })
      .catch(error => this.setState( { error: 'Something went wrong, please try again later' } ))
    .then(() => {
      Promise.resolve(fetchDataExpress('watchlist'))
    .then(data => this.setState( { watchListIds: data.watchList} ))
      .then(() => {
        const moviesToWatch = this.state.watchListIds.reduce((acc, movieId) => {
          const movie = this.state.movies.find(movie => movie.id === movieId)
            !acc.includes(movie)  &&  acc.push(movie)
          return acc;
        }, [])
        this.setState( { watchListMovies: moviesToWatch })
      })
    })
  }

  handleWatchList = (event, movieId) => {
    event.preventDefault();
    Promise.resolve(postDataExpress(movieId))
    .then( () => {
      Promise.resolve(fetchDataExpress('watchlist'))
    .then(data => this.setState( { watchListIds: data.watchList} ))
    .then(() => {
      const moviesToWatch = this.state.watchListIds.reduce((acc, movieId) => {
        const movie = this.state.movies.find(movie => movie.id === movieId)
          !acc.includes(movie)  &&  acc.push(movie)
        return acc;
      }, [])
      this.setState( { watchListMovies: moviesToWatch })
    })
    })
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/' >
          <>
            <Header />
            {this.state.error ? <div className='error-div'><h2 className='error-h2' id='error'>{this.state.error}</h2> </div> :
            <MoviesContainer movies={this.state.movies} />}
          </>
        </Route>
        <Route exact path='/watchlist' >
          <>
            <Header />
            {!this.state.watchListMovies.length ? 
            <div className='error-div'><h2 className='error-h2' id='error'>There is no movie on the watch list, try adding some </h2></div> :
            <MoviesContainer movies={this.state.watchListMovies} /> }
          </>
        </Route>
        <Route exact path={`/:movie/:id`} render={( {match} ) => {
         return <MovieDetails match={match} addToWatchList={this.handleWatchList} />
        }}/>
        <Route exact path={'/error'} render={( {match} ) => <ErrorComponent /> }/>
      </div>
    )
  }
}

export default App;

