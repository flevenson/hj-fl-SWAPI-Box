import React from 'react';
import Card from '../Card/Card.js';
import PropTypes from 'prop-types';
import './CardContainer.css';

const CardContainer = ({ people, planets, vehicles, display, selected, favorites, addToFavorites, favorited, isLoading }) => {
	
  // let cards

  const cards = Object.keys(display).map(element => { 
    console.log(`${selected}`)
		return <Card
			data={display[element]}
			key={element}
      id={display[element].name}
      selected={selected}
      addToFavorites={addToFavorites}
      favorited={false}
		/>
	})

  // switch(selected) {
  //   case 'people': 
  //     cards = Object.keys(people).map(element => { 
  //       console.log(`${selected}`)
  //       return <Card
  //         data={people[element]}
  //         key={element}
  //         id={people[element].name}
  //         selected={selected}
  //         addToFavorites={addToFavorites}
  //         favorited={false}
  //       />
  //     })
  //     return cards;
  //   case 'planets': 
  //     cards = Object.keys(planets).map(element => { 
  //       console.log(`${selected}`)
  //       return <Card
  //         data={planets[element]}
  //         key={element}
  //         id={planets[element].name}
  //         selected={selected}
  //         addToFavorites={addToFavorites}
  //         favorited={false}
  //       />
  //     })
  //     return cards;
  //   case 'vehicles': 
  //     cards = Object.keys(vehicles).map(element => { 
  //       console.log(`${selected}`)
  //       return <Card
  //         data={vehicles[element]}
  //         key={element}
  //         id={vehicles[element].name}
  //         selected={selected}
  //         addToFavorites={addToFavorites}
  //         favorited={false}
  //       />
  //     })
  //     return cards;
  // }

  if (!selected.length && !Object.keys(display).length) {
    return (
      <div>
        Welcome To SWAPI BOX
      </div>
  )} else if (isLoading) {
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
	display: PropTypes.object.isRequired,
  selected: PropTypes.string.isRequired
}; 

export default CardContainer;