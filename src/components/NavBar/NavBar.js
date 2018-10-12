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
      <button className={selected === 'people' ? 'selected' : 'people'} name='people' onClick={handleClick}>People</button>
      <button className={selected === 'planets' ? 'selected' : 'planets'} name='planets' onClick={handleClick}>Planets</button>
      <button className={selected === 'vehicles' ? 'selected' : 'vehicles'} name='vehicles' onClick={handleClick}>Vehicles</button>
      <button className={selected} name='favorites'>Favorites</button>
    </div>
  )
  
}

NavBar.propTypes = {
	selected: PropTypes.string,
	getPeople: PropTypes.func

}

export default NavBar