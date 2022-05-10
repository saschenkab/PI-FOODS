import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const Card = ({ id, image, name, diet}) => {
  return (
    <div>
      <Link className='card-link' to={`/recipe/${id}`}>
        <div className="card-container">
          <div className="img-container">
            <img className='card-img' src={image} alt={name} />
          </div>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <div className="card-diet">
              {diet?.map(diets => (
                <span className="diets" key={diets}>{diets}</span>
              ))}
            </div>
        </div>
    </div>
   </Link>
  </div>
  )
}

export default Card