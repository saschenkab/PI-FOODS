import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getDietsAction, filterRecipes } from "../../redux/actions/actions";
import { primaryColor, secondaryColor, white } from "../../utils/colors";

const Container = styled.div`
  width: 20%;
  background-color: ${primaryColor};
  height: 400px;
  border-radius: 40px;
  padding: 20px;
`;

const DietItem = styled.div`
  margin: 15px 0;
  text-transform: capitalize;
  position: relative;
  color: ${white};
  font-weight: ${(props) => (props.active ? 700 : 500)};
  cursor: pointer;

  &::before {
    content: "";
    width: 5px;
    height: 100%;
    background-color: ${(props) =>
      props.active ? secondaryColor : "transparent"};
    position: absolute;
    left: -20px;
    border-radius: 15px;
  }
`;

const DietsFilter = () => {
  const dispatch = useDispatch();
  const diets = useSelector((state) => state.diets);
  const selectedDiet = useSelector((state) => state.selectedDiet);

  useEffect(() => {
    dispatch(getDietsAction());
  }, [dispatch]);

  const handleSelectDiet = (diet) => {
    dispatch(filterRecipes(diet));
  };

  return (
    <Container>
      <DietItem
        active={selectedDiet === "all"}
        onClick={() => handleSelectDiet("all")}
      >
        <span>All diets</span>
      </DietItem>
      {diets.length > 0 &&
        diets.map((diet) => (
          <DietItem
            key={diet.id}
            active={selectedDiet === diet.name}
            onClick={() => handleSelectDiet(diet.name)}
          >
            <span>{diet.name}</span>
          </DietItem>
        ))}
    </Container>
  );
};

export default DietsFilter;
