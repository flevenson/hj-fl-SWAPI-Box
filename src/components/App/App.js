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
      planets: {},
      vehicles: {},
      filmText: {},
      selected: '',
      display: {},
      favorites: [],
      isLoading: false
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
    await this.setState({ selected: buttonName,
                          isLoading: true });

    if (buttonName !== 'favorites' && !Object.keys(this.state[buttonName]).length) {

      await this.setState({ [buttonName]: await Cleaner.fetchData(buttonName) })
    } 
      await this.setState({isLoading: false,
                            display: this.state[buttonName]})
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
    if(localStorage.favorites) {
    const storedFavorites = await JSON.parse(await localStorage.getItem('favorites'));
    this.setState({favorites: storedFavorites})
    } 
    if(localStorage.people) {
      const storedPeople = await JSON.parse(await localStorage.getItem('people'));
      this.setState({people: storedPeople})
    }
    if(localStorage.planets) {
      const storedPlanets = await JSON.parse(await localStorage.getItem('planets'));
      this.setState({planets: storedPlanets})
    }
    if(localStorage.vehicles) {
      const storedVehicles = await JSON.parse(await localStorage.getItem('vehicles'));
      this.setState({vehicles: storedVehicles})
    }
    await this.setState({ display: storedDisplay, selected: storedState})
  }

  handleNavClick = (event) => {
    console.log(event)
    let navButtonName = event.target.getAttribute('name')
    this.getData(navButtonName)
  }

  addToFavorites = (cardName, id, selectedState) => {
    let { display, favorites, selected  } = this.state
    let keys = Object.keys(display);

    let favoritesNames = favorites.map(favorite => favorite.Name)

    let cardToChange = keys.find(card => display[card].Name === cardName)
    console.log(cardToChange)
    this.changeFavorited(selectedState, cardToChange);

    if (favoritesNames.includes(cardName)) {

      let filteredFavorites = favorites.filter(favorite => favorite.Name !== cardName)
      this.setState({ favorites: filteredFavorites, selectedState: this.state[selectedState], display: this.state[selectedState]})
      localStorage.setItem(('favorites'), JSON.stringify(filteredFavorites))
      localStorage.setItem(('display'), JSON.stringify(filteredFavorites))
      localStorage.setItem(([selectedState]), JSON.stringify(this.state[selectedState]))
    } else {

      let cardToFavorite = keys.find(key => display[key].Name === cardName)
      favorites.push(display[cardToFavorite])
      this.setState({ favorites: favorites, selectedState: this.state[selectedState], display: this.state[selectedState] })
      localStorage.setItem(('favorites'), JSON.stringify(favorites))
      localStorage.setItem(('display'), JSON.stringify(this.state[selectedState]))
      localStorage.setItem(([selectedState]), JSON.stringify(this.state[selectedState]))

    }
  }

  changeFavorited = (selected, cardName) => {
    let {people, planets, vehicles } = this.state
    switch(selected){
      case 'people':
      people[cardName].Favorited = !people[cardName].Favorited
      this.setState({display: this.state.people});
      case 'planets':
      planets[cardName].Favorited = !planets[cardName].Favorited
      this.setState({display: this.state.planets});
      case 'vehicles':
      vehicles[cardName].Favorited = !vehicles[cardName].Favorited
      this.setState({display: this.state.vehicles});
;

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
    const { people, planets, vehicles, selected, filmText, display, favorites, isLoading } = this.state;

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
            people={ people }
            planets={ planets }
            vehicles={ vehicles }
            display={ display } 
            favorites={ favorites }
            selected={ selected }
            addToFavorites={ this.addToFavorites }
            favorited={ false }
            isLoading={ isLoading }
          />
        </main>
      </div>
    );
  }
}

export default App;
