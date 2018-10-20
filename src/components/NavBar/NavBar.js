import React from 'react';
import PropTypes from 'prop-types';
import './NavBar.css'
import { Route, NavLink } from 'react-router-dom'


const NavBar = ({ selected, handleNavClick }) => {

	 return (
    <div className="nav-bar-div">
      <button 
      	className={selected === 'people' ? 'selected' : 'people'} 
      	name='people' 
      	onClick={handleNavClick}>
      	 People
        <NavLink to='/people'></NavLink>
      </button>
      <button 
      	className={selected === 'planets' ? 'selected' : 'planets'} 
      	name='planets' 
      	onClick={handleNavClick}>
      	Planets
        <NavLink to='/planets'></NavLink>
      </button>
      <button 
      	className={selected === 'vehicles' ? 'selected' : 'vehicles'} 
      	name='vehicles' 
      	onClick={handleNavClick}>
      	Vehicles
        <NavLink to='/vehicles'></NavLink>
      </button>
      <button 
      	className={selected === 'favorites' ? 'selected' : 'favorites'}
      	name='favorites'
        onClick={handleNavClick}>
      	Favorites
        <NavLink to='/favorites'></NavLink>
      </button>
    </div>
  )
  
}

NavBar.propTypes = {
	selected: PropTypes.string.isRequired,
	handleNavClick: PropTypes.func.isRequired
}

export default NavBar