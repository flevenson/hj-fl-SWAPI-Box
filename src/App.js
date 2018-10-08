import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
        </header>

      </div>
    );
  }
}

export default App;
