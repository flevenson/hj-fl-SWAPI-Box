import React from 'react';
import PropTypes from 'prop-types';

const NavBar = ({ selected, getPeople }) => {

	const handleClick = (event) => {
		let buttonName = event.target.getAttribute('name')
		getPeople(buttonName)
	}
  
  return (
    <div className="nav-bar-div">
      <button className="people-button" name='people' onClick={handleClick}>People</button>
      <button className="planets-button" name='planets'>Planets</button>
      <button className="vehicles-button" name='vehicles'>Vehicles</button>
      <button className="favorites-button" name='favorites'>Favorites</button>
    </div>
  )
  
}

NavBar.propTypes = {
	selected: PropTypes.string.isRequired,
	getPeople: PropTypes.func.isRequired

}

export default NavBar