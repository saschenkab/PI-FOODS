import React from "react";
import {
  CardBody,
  CardContainer,
  CardDiets,
  CardOverlay,
  CardTitle,
} from "./styles";

const Card = ({ id, image, name, diet }) => {
  return (
    <CardContainer to={`/recipe/${id}`} backgroundImg={image}>
          <CardOverlay />
      <CardBody>
        <CardDiets>
          {diet?.map((diets) => (
            <p key={diets}>{diets}</p>
            ))}
        </CardDiets>
        <CardTitle>{name}</CardTitle>
      </CardBody>
    </CardContainer>
  );
};

export default Card;
