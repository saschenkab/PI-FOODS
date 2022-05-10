import React from 'react'
import Card from '../Card'
import './styles.css'

const Cards = ({ recipes, span }) => {
  return (
    <div>
        {span !== null && span}

        {Array.isArray(recipes) && recipes.length > 0 ? (
            <div className="cards-container">
                {recipes.map(recipe => (
                    <Card 
                        key={recipe.id}
                        id={recipe.id}
                        name={recipe.name}
                        image={recipe.image}
                        diet={recipe.diet}
                        />
                ))}
            </div>
        ) : (
            <div className="no-recipes">
                <h1>No recipes found</h1>
            </div>
        )}
    </div>
  )
}

export default Cards