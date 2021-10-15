import React, { Component } from 'react';
//import { movieData } from './movieData';
import { Header } from './Header/Header';
import { MoviesContainer } from './MoviesContainer/MoviesContainer';
import { fetchAllMovies} from './apiCalls';
// import logo from './user-icon.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: []
    }
  }

  componentDidMount = () => {
    fetchAllMovies().then(data => this.setState({ movies: data }))
  }

  render() {
    return (
      <div className="App">
      <Header />
      <MoviesContainer />
      </div>
    )
  }
}

export default App;
