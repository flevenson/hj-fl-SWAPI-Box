import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import Star from '../../images/star.svg'

const Card = ({ name, gender, height, birth_year }) => {

	  return (
	    <div className='card'>
	      <h1>{name}</h1>
	      <p>Gender: {gender}</p>
	      <p>Species: {height}cm</p>
	      <p>Birth Year: {birth_year}</p>
	      <p>Homeworld: Tatooine</p>
	      <img class='favorite-button' src={Star} alt='favorite button' />
	    </div>
	  )
	}

Card.propTypes = {
	name: PropTypes.string,
	gender: PropTypes.string,
	height: PropTypes.number
}

export default Card; 