import React from 'react';
import Card from '../Card/Card.js';
import PropTypes from 'prop-types';

const CardContainer = ({ display, people }) => {
	const cards = Object.keys(people).map(person => {
		return <Card
			person={people[person]}
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
  	  <div>
  	  	{ cards }
  	  </div>
  	)
  }
}

CardContainer.propTypes = {
	display: PropTypes.array.isRequired,
	people: PropTypes.object.isRequired
}; 

export default CardContainer;