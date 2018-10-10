import React from 'react';
import './SideText.css'

const SideText = ( { filmText }) => {

  return (
    <div className='side-text-div'>
      <p className='typewriter-text' >{ filmText }</p>
    </div>
  )
}

export default SideText