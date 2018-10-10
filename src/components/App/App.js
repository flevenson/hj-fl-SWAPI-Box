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
      favorites: [],
      filmText: '',
      selected: '',
      display: []

    }
  }

  async componentDidMount() {
    const starWarsApi = 'https://swapi.co/api/';
    const response = await fetch(starWarsApi);
    const data = await response.json();
    const filmText = await this.formatFilmText(data)
    const people = await this.formatPeople(data);
    this.setState({
      people: people.results,
      filmText: filmText,
    })
  }

  async formatPeople(data) {
    const peopleResponse = await fetch(data.people);
    const peopleData = await peopleResponse.json();
    return {...peopleData}
  }

  async formatFilmText(data) {
    const randomNumber = await Math.round(Math.random() * 6);
    console.log(randomNumber);
    const filmsResponse = await fetch(data.films);
    const films = await filmsResponse.json();
    const filmText = await films.results[randomNumber].opening_crawl

    return filmText
  }

  render() {
    const { people, planets, vehicles, selected, filmText, display } = this.state;

    return (
      <div className="app">
        <header className="app-header">
          <h1 className="site-heading">SWAPI Box</h1>
          <NavBar />
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
