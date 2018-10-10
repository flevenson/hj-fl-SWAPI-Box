import React from 'react';
import Card from '../Card/Card.js'
const CardContainer = ({ display, people }) => {
	console.log(people)
	const cards = Object.keys(people).map(person => {
		return <Card
			person={people[person]}
			key={person}
		/>

	})

  if(!Object.keys(people).length) {
    return (
      <div>
        Welcome To SWAPI BOX
      </div>
      )
  }	else {
  	return (
  	  <div>
  	  	{ cards }
  	  </div>
  	)
  }
}

export default CardContainer