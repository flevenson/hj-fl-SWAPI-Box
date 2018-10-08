import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      planets: [],
      vehicles: []
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>SWAPI Box</h1>
          <NavBar />
        </header>
      </div>
    );
  }
}

export default App;
