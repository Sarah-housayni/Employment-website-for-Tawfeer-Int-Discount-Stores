import React from 'react'
import './crousel.css'
const Store = (props) => {
  return (
  
        <div className="card">
          <img src={props.img} alt="store image" />
          <br/>
          <h2>{props.name}</h2>
          <p>Governate: {props.city}</p>
          <button>Find</button>
          
        </div>
        
      
  )
}

export default Store