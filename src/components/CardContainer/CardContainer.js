import React from 'react';
import Card from '../Card/Card.js';
import PropTypes from 'prop-types';
import './CardContainer.css';

const CardContainer = ({ display, selected, favorites, addToFavorites, favorited }) => {
	const cards = Object.keys(display).map(element => {
		return <Card
			data={display[element]}
			key={element}
      id={display[element].name}
      selected={selected}
      addToFavorites={addToFavorites}
      favorited={false}
		/>
	})

  if(!Object.keys(display).length) {
    return (
      <div>
        Welcome To SWAPI BOX
      </div>
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