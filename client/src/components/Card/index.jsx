import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { secondaryColor, white } from "../../utils/colors";

const CardContainer = styled(Link)`
  width: calc(33.333% - 40px);
  margin: 0 20px 40px 20px;
  position: relative;
  border-radius: 20px;
  height: 270px;
  background-image: url(${(props) => props.backgroundImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &:nth-child(3n) {
    margin-right: 0;
  }
`;

const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background: linear-gradient(359.81deg, #4F4F4F 14.75%, rgba(196, 196, 196, 0) 99.83%);
`;

const CardBody = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 10px;
`;

const CardDiets = styled.div`
  p {
    background-color: ${secondaryColor};
    margin: 3.5px;
    padding: 5px;
    border-radius: 10px;
    font-size: 12px;
    display: inline-block;
    color: ${white};
  }
`;

const CardTitle = styled.h2`
  color: ${white};
  font-weight: 600;
  font-size: 18px;
`;

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
