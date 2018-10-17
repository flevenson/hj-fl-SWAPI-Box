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
      filmText: {},
      selected: '',
      display: {},
      favorites: []
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
    if (localStorage.display && localStorage.selected) {
      this.getFromLocalStorage()
    }
  }

  getData = async (buttonName) => {
    await this.setState({ selected: buttonName });
    if (buttonName !== 'favorites'){
      await this.setState({ display: await Cleaner.fetchData(buttonName) })
    } else {
      await this.setState({ display: this.state.favorites })
    }
    await this.addToLocalStorage(buttonName)
  }

  addToLocalStorage(buttonName) {
    localStorage.setItem(('display'), JSON.stringify(this.state.display))
    localStorage.setItem(('selected'), JSON.stringify(this.state.selected))
    localStorage.setItem(('favorites'), JSON.stringify(this.state.favorites))
  }

  getFromLocalStorage = async () => {
    const storedDisplay = await JSON.parse(await localStorage.getItem('display'));
    const storedState = await JSON.parse(await localStorage.getItem('selected'));
    const storedFavorites = await JSON.parse(await localStorage.getItem('favorites'));
    await this.setState({ display: storedDisplay, selected: storedState, favorites: storedFavorites })
  }

  handleNavClick = (event) => {
    console.log(event)
    let buttonName = event.target.getAttribute('name')
    this.getData(buttonName)
  }

  addToFavorites = (name, id) => {
    let keys = Object.keys(this.state.display);
    let favoritesNames = this.state.favorites.map(favorite => favorite.Name)
    let cardToChange = keys.find(card => this.state.display[card].Name === name)
    this.state.display[cardToChange].Favorited = !this.state.display[cardToChange].Favorited
    if (favoritesNames.includes(name)) {
      let filteredFavorites = this.state.favorites.filter(favorite => favorite.Name !== name)
      this.setState({ favorites: filteredFavorites, display: filteredFavorites })
      localStorage.setItem(('favorites'), JSON.stringify(filteredFavorites))
      localStorage.setItem(('display'), JSON.stringify(filteredFavorites))
    } else {
      let cardToFavorite = keys.find(key => this.state.display[key].Name === name)
      this.state.favorites.push(this.state.display[cardToFavorite])
      this.setState({ favorites: this.state.favorites })
      localStorage.setItem(('favorites'), JSON.stringify(this.state.favorites))
    }
  }

  async formatFilmText(data) {
    const randomNumber = await Math.round(Math.random() * 6);
    const filmText = await data.results[randomNumber].opening_crawl
    const filmTitle = await data.results[randomNumber].title
    const episode = await data.results[randomNumber].episode_id
    const formattedFilm = await {
      text: filmText,
      title: filmTitle,
      episode: episode
    }  
    return formattedFilm
  }

  render() {
    const { selected, filmText, display, favorites } = this.state;

    return (
      <div className="app">
        <header className="app-header">
          <h1 className="site-heading">SWAPI Box</h1>
          <NavBar 
            getData={ this.getData } 
            selected={ selected } 
            handleNavClick={ this.handleNavClick }
          />
        </header>
        <aside className="app-aside">
          <SideText 
            filmText={ filmText } 
          />
        </aside>
        <main>
          <CardContainer 
            display={ display } 
            favorites={ favorites }
            selected={ selected }
            addToFavorites={ this.addToFavorites }
            favorited={ false }
          />
        </main>
      </div>
    );
  }
}

export default App;
