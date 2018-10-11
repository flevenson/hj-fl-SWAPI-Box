import React from 'react';
import Card from '../Card/Card.js';
import PropTypes from 'prop-types';
import './CardContainer.css';

const CardContainer = ({ display }) => {
	const cards = Object.keys(display).map(element => {
		return <Card
			{...display[element]}
			key={element}
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
	display: PropTypes.object,
}; 

export default CardContainer;