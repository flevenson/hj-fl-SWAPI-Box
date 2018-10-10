import React from 'react'

const Card = ({ person }) => {
const { name, gender, height } = person;
  return (
    <div>
      <p>{name}</p>
      <p>{gender}</p>
      <p>{height}</p>
    </div>
  )

}


export default Card 