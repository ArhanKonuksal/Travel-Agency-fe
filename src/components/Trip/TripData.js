import React from 'react'
import "./TripStyles.css"

export const TripData = (props) => {
  return (
    <div className='t-card'>
        <div className='t-image'>
            <img alt="noimg" src={props.image}></img>
        </div>
       <h4>{props.heading}</h4> 
       <p>{props.text}</p>
       <h5>{props.days}</h5>
       <h6>{props.price}</h6> 
    </div>
  )
}

export default TripData
