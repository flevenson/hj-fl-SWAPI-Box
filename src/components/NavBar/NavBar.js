import React from 'react';
import PropTypes from 'prop-types';
import './NavBar.css'

const NavBar = ({ selected, getData }) => {

	const handleClick = (event) => {
		let buttonName = event.target.getAttribute('name')
		getData(buttonName)
	}
  
  return (
    <div className="nav-bar-div">
      <button className="people-button" name='people' onClick={handleClick}>People</button>
      <button className="planets-button" name='planets' onClick={handleClick}>Planets</button>
      <button className="vehicles-button" name='vehicles' onClick={handleClick}>Vehicles</button>
      <button className="favorites-button" name='favorites'>Favorites</button>
    </div>
  )
  
}

NavBar.propTypes = {
	selected: PropTypes.string,
	getPeople: PropTypes.func

}

export default NavBar