import React from 'react';
import './SideText.css';
import TypeWriter from 'react-typewriter';

const SideText = ( { filmText }) => {

  return (
    <div className='side-text-div'>
      <TypeWriter typing={1} className='typewriter-text' >{ filmText }</TypeWriter>
    </div>
  )
}

export default SideText