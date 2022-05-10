import React from 'react'
import styled from 'styled-components'
import Card from '../Card'

const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Cards = ({ recipes, span }) => {
  return (
    <div>
        {span !== null && span}

        {Array.isArray(recipes) && recipes.length > 0 ? (
            <CardsContainer>
                {recipes.map(recipe => (
                    <Card 
                        key={recipe.id}
                        id={recipe.id}
                        name={recipe.name}
                        image={recipe.image}
                        diet={recipe.diet}
                        />
                ))}
            </CardsContainer>
        ) : (
            <div className="no-recipes">
                <h1>No recipes found</h1>
            </div>
        )}
    </div>
  )
}

export default Cards