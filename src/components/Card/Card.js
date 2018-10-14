import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import Star from '../../images/star.svg'

const Card = ({ data, selected }) => {

		 if (selected === 'people') {

	  return (
	    <div className='card'>
	      <h1>{data.name}</h1>
        <p>Homeworld: {data.homeworld}</p>
        <p>Species: {data.species}</p>
	      <p>Population: {data.population}</p>
	      <img className='favorite-button' src={Star} alt='favorite button' />
	    </div>
	   )
	 } else if (selected === 'planets') {
	 	return (
	 		<div className='card'>
	 			<h1>{data.name}</h1>
        <p>Climate: {data.climate}</p>
        <p>Terrain: {data.terrain}</p>
        <p>Population: {data.population}</p>
	 			<p>Residents: {data.residents}</p>
	      		<img class='favorite-button' src={Star} alt='favorite button' />
	 		</div>
	 	)
	 } else if (selected === 'vehicles') {
	 	return (
	 		<div className='card'>
	 			<h1>{data.name}</h1>
	 			<p>Model: {data.model}</p>
	 			<p>Class: {data.vehicle_class}</p>
	 			<p>Number of Passengers: {data.passengers}</p>
	 			<p>Max Speed: {data.max_atmosphering_speed}</p>
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
	data: PropTypes.array.isRequired,
	selected: PropTypes.string.isRequired
}

export default Card; 