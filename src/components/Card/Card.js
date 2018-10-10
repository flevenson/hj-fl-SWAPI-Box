import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ person }) => {
	const { name, gender, height } = person;

	  return (
	    <div>
	      <p>{name}</p>
	      <p>{gender}</p>
	      <p>{height}</p>
	    </div>
	  )

	}

Card.propTypes = {
	person: PropTypes.object.isRequired
}

export default Card; 