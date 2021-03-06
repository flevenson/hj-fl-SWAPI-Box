import React from 'react';
import PropTypes from 'prop-types';
import './NavBar.css'
import { Route, NavLink } from 'react-router-dom'


const NavBar = ({ selected, handleNavClick, favorites}) => {

	 return (
    <div className="nav-bar-div">
      <button 
      	className={selected === 'people' ? 'selected' : 'people'} 
      	name='people' 
      	onClick={handleNavClick}>
        <NavLink 
          className={selected === 'people' ? 'selected' : 'people'} 
          to='/people' 
          name='people'>People</NavLink>
      </button>
      <button 
      	className={selected === 'planets' ? 'selected' : 'planets'} 
      	name='planets' 
      	onClick={handleNavClick}>
        <NavLink 
          className={selected === 'planets' ? 'selected' : 'planets'}
          to='/planets' 
          name='planets'>Planets</NavLink>
      </button>
      <button 
      	className={selected === 'vehicles' ? 'selected' : 'vehicles'} 
      	name='vehicles' 
      	onClick={handleNavClick}>
        <NavLink 
          className={selected === 'vehicles' ? 'selected' : 'vehicles'}
          to='/vehicles' 
          name='vehicles'>Vehicles</NavLink>
      </button>
      <button 
      	className={selected === 'favorites' ? 'selected' : 'favorites'}
      	name='favorites'
        onClick={handleNavClick}>
        <NavLink to='/favorites' name='favorites'>Favorites {favorites.length}</NavLink>
      </button>
    </div>
  )
  
}

NavBar.propTypes = {
	selected: PropTypes.string.isRequired,
	handleNavClick: PropTypes.func.isRequired,
  favorites: PropTypes.array.isRequired
}

export default NavBar