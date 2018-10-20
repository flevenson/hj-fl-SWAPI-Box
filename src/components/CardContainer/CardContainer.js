import React from 'react';
import Card from '../Card/Card.js';
import PropTypes from 'prop-types';
import './CardContainer.css';

const CardContainer = ({ people, planets, vehicles, selected, favorites, addToFavorites, favorited, isLoading }) => {
	
  let cards

  const makeCards = selected => {
   switch(selected) {
    case 'people': 
      return Object.keys(people).map(element => { 
        console.log(`${selected}`)
        return <Card
          data={people[element]}
          key={element}
          id={people[element].Name}
          selected={selected}
          addToFavorites={addToFavorites}
          favorited={false}
        />
      })
    case 'planets': 
      return Object.keys(planets).map(element => { 
        console.log(`${selected}`)
        return <Card
          data={planets[element]}
          key={element}
          id={planets[element].Name}
          selected={selected}
          addToFavorites={addToFavorites}
          favorited={false}
        />
      })
    case 'vehicles': 
      return Object.keys(vehicles).map(element => { 
        console.log(`${selected}`)
        return <Card
          data={vehicles[element]}
          key={element}
          id={vehicles[element].Name}
          selected={selected}
          addToFavorites={addToFavorites}
          favorited={false}
        />
      })
    case 'favorites':
      return favorites.map(element => { 
        // debugger
        return <Card
          data={element}
          key={element}
          id={element.Name}
          selected={selected}
          addToFavorites={addToFavorites}
          favorited={false}
        />
      })
  }
}
  
  cards = makeCards(selected)

  if (!selected.length && !Object.keys([selected]).length) {
    return (
      <div>
        Welcome To SWAPI BOX
      </div>
  )} else
   if (isLoading) {
      return (
        <div>loading, please wait..</div>
    )
  }	else {
  	return (
  	  <div className='card-container'>
  	  	{ cards }
  	  </div>
  	)
  }
}

CardContainer.propTypes = {
  people: PropTypes.object,
  planets: PropTypes.object,
  vehicles: PropTypes.object,
  favorites: PropTypes.array.isRequired,
  selected: PropTypes.string.isRequired,
  addToFavorites: PropTypes.func.isRequired,
  favorited: PropTypes.bool,
  isLoading: PropTypes.bool.isRequired
}; 

export default CardContainer;