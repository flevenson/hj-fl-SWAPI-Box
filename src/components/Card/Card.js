import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ name, gender, height }) => {
	// const { name, gender, height } = person;

	  return (
	    <div>
	      <p>{name}</p>
	      <p>{gender}</p>
	      <p>{height}</p>
	    </div>
	  )

	}

Card.propTypes = {
	name: PropTypes.string,
	gender: PropTypes.string,
	height: PropTypes.number
}

export default Card; 