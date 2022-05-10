import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Card from "../Card";

const Message = styled.div`
  display: flex;
  justify-content: center;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Cards = ({ recipes }) => {
  const loading = useSelector((state) => state.loading);

  if (loading) {
    return (
      <Message>
        <h1>Loading...</h1>
      </Message>
    );
  }

  return (
    <>
      {Array.isArray(recipes) && recipes.length > 0 ? (
        <CardsContainer>
          {recipes.map((recipe) => (
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
        <Message>
          <h1>No recipes found</h1>
        </Message>
      )}
    </>
  );
};

export default Cards;
