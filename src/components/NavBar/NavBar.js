import React from 'react';

const NavBar = ({ selected }) => {

  
  return (
    <div className="nav-bar-div">
      <button className="people-button" name='people'>People</button>
      <button className="planets-button" name='planets'>Planets</button>
      <button className="vehicles-button" name='vehicles'>Vehicles</button>
      <button className="favorites-button" name='favorites'>Favorites</button>
    </div>
  )
  
}

export default NavBar