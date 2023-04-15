import React from 'react'

export const SingleCard = (props) => {
  return (
    <div>
      <div>
        <img src={props.image} alt="" />
        </div>
        <div>{props.name}</div>
        
    </div>
  )
}
