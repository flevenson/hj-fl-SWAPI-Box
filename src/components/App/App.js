import React, { Component } from 'react';
import './App.css';
import NavBar from '../NavBar/NavBar.js';
import SideText from '../SideText/SideText.js';
import CardContainer from '../CardContainer/CardContainer.js';
import * as Cleaner from '../../helper.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: {},
      filmText: '',
      selected: '',
      display: []
    }
  }

  async componentDidMount() {
    const starWarsApi = 'https://swapi.co/api/films/';
    const response = await fetch(starWarsApi);
    const data = await response.json();
    const filmText = await this.formatFilmText(data)
    this.setState({
      filmText: filmText
    })
  }

   getPeople = async (buttonName) => {
    // await Cleaner.formatPeople()
    await this.setState({ people: await Cleaner.formatPeople() })
    // Promise.all()
  }

  async formatFilmText(data) {
    const randomNumber = await Math.round(Math.random() * 6);
    const filmText = await data.results[randomNumber].opening_crawl

    return filmText
  }

  render() {
    const { people, selected, filmText, display } = this.state;

    return (
      <div className="app">
        <header className="app-header">
          <h1 className="site-heading">SWAPI Box</h1>
          <NavBar getPeople={ this.getPeople } />
        </header>
        <aside className="app-aside">
          <SideText filmText={ filmText } />
        </aside>
        <main>
          <CardContainer display={ display } people={ people } />
        </main>
      </div>
    );
  }
}

export default App;
