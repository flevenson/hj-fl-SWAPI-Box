import React, { Component } from 'react';
import './App.css';
import NavBar from '../NavBar/NavBar.js';
import SideText from '../SideText/SideText.js';
import CardContainer from '../CardContainer/CardContainer.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      planets: [],
      vehicles: [],
      selected: '',
      display: []
    }
  }


  render() {
    const { people, planets, vehicles, selected, display } = this.state;

    return (
      <div className="app">
        <header className="app-header">
          <h1 className="site-heading">SWAPI Box</h1>
          <NavBar />
        </header>
        <aside className="app-aside">
          <SideText />
        </aside>
        <main>
          <CardContainer display={ display }/>
        </main>
      </div>
    );
  }
}

export default App;
