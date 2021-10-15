import React, { Component } from 'react';
import { movieData } from './movieData'
import { Header } from './Header/Header'
// import logo from './user-icon.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = movieData;
  }

  render() {
    return (
      <div className="App">
      <Header />
      </div>
    )
  }
}

export default App;
