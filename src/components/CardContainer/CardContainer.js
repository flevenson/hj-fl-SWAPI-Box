import React from 'react';
import Card from '../Card/Card.js';
import PropTypes from 'prop-types';
import './CardContainer.css';

const CardContainer = ({ display, people }) => {
	const cards = Object.keys(people).map(person => {
		return <Card
			{...people[person]}
			key={person}
		/>

	})

  if(!Object.keys(people).length) {
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
	display: PropTypes.array,
	people: PropTypes.object.isRequired
}; 

export default CardContainer;