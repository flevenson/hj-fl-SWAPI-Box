import React, { Component } from 'react';
import './App.css';
import NavBar from '../NavBar/NavBar.js';
import SideText from '../SideText/SideText.js';
import CardContainer from '../CardContainer/CardContainer.js';
import * as Cleaner from '../../helper.js';
import { Route, NavLink } from 'react-router-dom'

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: {},
      planets: {},
      vehicles: {},
      filmText: {},
      selected: '',
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
    if (localStorage.selected) {
      this.getFromLocalStorage()
    }
  }

  getData = async (buttonName) => {
    await this.setState({ selected: buttonName,
                          isLoading: true });

    if (buttonName !== 'favorites' && !Object.keys(this.state[buttonName]).length) {

      await this.setState({ [buttonName]: await Cleaner.fetchData(buttonName) })
    } else {
      let storedData = await JSON.parse( await localStorage.getItem(buttonName))
      await this.setState({[buttonName]: storedData})
    }
      await this.setState({isLoading: false})
      await this.addToLocalStorage(buttonName)
    }

  addToLocalStorage(buttonName) {
    localStorage.setItem(([buttonName]), JSON.stringify(this.state[buttonName]))
    localStorage.setItem(('selected'), JSON.stringify(this.state.selected))
    localStorage.setItem(('favorites'), JSON.stringify(this.state.favorites))
  }

  getFromLocalStorage = async () => {
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
    await this.setState({ selected: storedState})
  }

  handleNavClick = (event) => {
    let navButtonName = event.target.getAttribute('name')
    this.getData(navButtonName)
  }

  addToFavorites = (id, selectedState) => {
    let { favorites, selected  } = this.state
    let keys = Object.keys(this.state[selectedState]);
    let favoritesNames = favorites.map(favorite => favorite.Name)
    let cardToChange = keys.find(card => this.state[selectedState][card].Name === id)
    console.log(cardToChange)
    this.changeFavorited(selectedState, cardToChange);

    if (favoritesNames.includes(id)) {

      let filteredFavorites = favorites.filter(favorite => favorite.Name !== id)
      this.setState({ favorites: filteredFavorites, selectedState: this.state[selectedState]})
      localStorage.setItem(('favorites'), JSON.stringify(filteredFavorites))
      localStorage.setItem(([selectedState]), JSON.stringify(this.state[selectedState]))
    } else {

      let cardToFavorite = keys.find(key => this.state[selectedState][key].Name === id)
      let newFavorites = favorites.push(this.state[selectedState][cardToFavorite])
      this.setState({ favorites: favorites, selectedState: this.state[selectedState]})
      localStorage.setItem(('favorites'), JSON.stringify(favorites))
      localStorage.setItem(([selectedState]), JSON.stringify(this.state[selectedState]))

    }
  }

  changeFavorited = (selected, cardName) => {
    let {people, planets, vehicles, favorites } = this.state
    switch(selected){
      case 'people':
        people[cardName].Favorited = !people[cardName].Favorited;
        this.setState({people: this.state.people});
        return;
      case 'planets':
        planets[cardName].Favorited = !planets[cardName].Favorited;
        this.setState({planets: this.state.planets});
        return;
      case 'vehicles':
        vehicles[cardName].Favorited = !vehicles[cardName].Favorited;
        this.setState({vehicles: this.state.vehicles});
        return;
      case 'favorites':
        let cardToChange = favorites.find(favorite => favorite.Name === favorites[cardName].Name)
        console.log(cardToChange)
        if (cardToChange.Homeworld){
          let keys = Object.keys(people)
          let cardToEdit = keys.find(card => people[card].Name === cardToChange.Name)
          people[cardToEdit].Favorited = !people[cardToEdit].Favorited
          this.setState({people: this.state.people});
          localStorage.setItem(('people'), JSON.stringify(this.state.people))
        } else if (cardToChange.Climate) {
          let keys = Object.keys(planets)
          let cardToEdit = keys.find(card => planets[card].Name === cardToChange.Name)
          planets[cardToEdit].Favorited = !planets[cardToEdit].Favorited
          this.setState({planets: this.state.planets});
          localStorage.setItem(('planets'), JSON.stringify(this.state.planets))
        } else if (cardToChange.Model) {
          let keys = Object.keys(vehicles)
          let cardToEdit = keys.find(card => vehicles[card].Name === cardToChange.Name)
          vehicles[cardToEdit].Favorited = !vehicles[cardToEdit].Favorited
          this.setState({vehicles: this.state.vehicles});
          localStorage.setItem(('vehicles'), JSON.stringify(this.state.vehicles))      
        }
        return
      }
      localStorage.setItem(([selected]), JSON.stringify(this.state[selected]))
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
    const { people, planets, vehicles, selected, filmText, favorites, isLoading } = this.state;

    return (
      <div className="app">
        <header className="app-header">
          <h1 className="site-heading">SWAPI Box</h1>
          <NavBar 
            getData={ this.getData } 
            selected={ selected } 
            handleNavClick={ this.handleNavClick }
            favorites={favorites}
          />
        </header>
        <aside className="app-aside">
          <SideText 
            filmText={ filmText } 
          />
        </aside>
        <main>
          <Route exact path='/people' render={() => <CardContainer  
            people={ people }
            favorites={ favorites }
            selected='people'
            addToFavorites={ this.addToFavorites }
            favorited={ false }
            isLoading={ isLoading }/>} />
          <Route exact path='/planets' render={() => <CardContainer  
            planets={ planets }
            favorites={ favorites }
            selected='planets'
            addToFavorites={ this.addToFavorites }
            favorited={ false }
            isLoading={ isLoading }/>} />          
          <Route exact path='/vehicles' render={() => <CardContainer  
            vehicles={ vehicles }
            favorites={ favorites }
            selected='vehicles'
            addToFavorites={ this.addToFavorites }
            favorited={ false }
            isLoading={ isLoading }/>} />
          <Route exact path='/favorites' render={() => <CardContainer  
            people={ people }
            planets={ planets }
            vehicles= { vehicles } 
            favorites={ favorites }
            selected='favorites'
            addToFavorites={ this.addToFavorites }
            favorited={ false }
            isLoading={ isLoading }/>} />
        </main>
      </div>
    );
  }
}

export default App;
