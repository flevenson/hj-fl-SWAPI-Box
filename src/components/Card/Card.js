import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import Star from '../../images/star.svg';
import StarTwo from '../../images/clicked-star.svg';

const Card = ({ data, selected, addToFavorites, id }) => {
    let dataKeys = Object.keys(data);
    let filteredDataKeys = dataKeys.filter(data => data !== data.Favorited)
    let cardCharacteristics = filteredDataKeys.map(key => (
      <p key={key}>{key.toUpperCase()}: {data[key]}</p>
    ))

		if (data) {
	  return (
	    <div className='card'>
        { cardCharacteristics  }
        <button 
          className='favorite-button'
        	name={data.Name} 
        	onClick={() => addToFavorites(id, selected)
        }>	      
	        <img   
        	  className='favorite-button'
              src={data.Favorited ? StarTwo : Star}
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