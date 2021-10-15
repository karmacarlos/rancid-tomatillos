import React, { Component } from 'react';
import { movieData } from './movieData';
import { Header } from './Header/Header';
import  MoviesContainer  from './MoviesContainer/MoviesContainer.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: movieData.movies,
    }
  }

  render() {
    return (
      <div className="App">
      <Header />
      <MoviesContainer movies={this.state.movies}/>
      </div>
    )
  }
}

export default App;
