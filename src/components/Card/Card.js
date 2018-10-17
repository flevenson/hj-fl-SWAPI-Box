import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import Star from '../../images/star.svg';
import StarTwo from '../../images/clicked-star.svg';

const Card = ({ data, selected, addToFavorites, favorited, id }) => {
    let dataKeys = Object.keys(data);
    let cardCharacteristics = dataKeys.map(key => (
      <p>{key.toUpperCase()}: {data[key]}</p>
    ))

		if (data) {
	  return (
	    <div className='card'>
        { cardCharacteristics  }
        <button 
        	name={data.Name} 
        	onClick={() => addToFavorites(data.Name, id)
        }>	      
	        <img   
        	  className='favorite-button'
              src={favorited ? StarTwo : Star}
              name={data.Name} 
              alt='favorite button' 
              
	        />
        </button>
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