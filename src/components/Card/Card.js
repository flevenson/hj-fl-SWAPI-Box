import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import Star from '../../images/star.svg'

const Card = ({ data, selected }) => {

		 if (selected === 'people') {

	  return (
	    <div className='card'>
	      <h1>{data.name}</h1>
	      <p>Gender: {data.gender}</p>
	      <p>Species: {data.height}cm</p>
	      <p>Birth Year: {data.birth_year}</p>
	      <p>Homeworld: Tatooine</p>
	      <img class='favorite-button' src={Star} alt='favorite button' />
	    </div>
	   )
	 } else if (selected === 'planets') {
	 	return (
	 		<div className='card'>
	 			<h1>{data.name}</h1>
	 			<p>Rotational Period: {data.rotational_period}</p>
	 			<p>Climate: {data.climate}</p>
	 			<p>Terrain: {data.terrain}</p>
	 			<p>population: {data.population}</p>
	      		<img class='favorite-button' src={Star} alt='favorite button' />
	 		</div>
	 	)
	 } else if (selected === 'vehicles') {
	 	return (
	 		<div className='card'>
	 			<h1>{data.name}</h1>
	 			<p>{data.cost_in_credits}</p>
	 			<p>{data.cargo_capacity}</p>
	 			<p>{data.vehicle_class}</p>
	 			<p>{data.max_atmosphering_speed}</p>
	      		<img class='favorite-button' src={Star} alt='favorite button' />	 			
	 		</div>
	 	)
	  } else {
	  	return (
	  		<div>
	  		</div>
	  		) 
	  }		
   }

Card.propTypes = {
	name: PropTypes.string,
	gender: PropTypes.string,
	height: PropTypes.number
}

export default Card; 