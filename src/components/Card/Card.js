import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import Star from '../../images/star.svg'

const Card = ({ data, selected, addToFavorites }) => {
    let dataKeys = Object.keys(data);
    let cardCharacteristics = dataKeys.map(key => (
      <p>{key.toUpperCase()}: {data[key]}</p>
    ))

		if (data) {
	  return (
	    <div className='card'>
        { cardCharacteristics  }	      
        <img  className='favorite-button' 
              src={Star}
              name={data.Name} 
              alt='favorite button' 
              onClick={addToFavorites}
        />
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