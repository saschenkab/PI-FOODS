import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDietsAction, filterRecipes } from "../../redux/actions/actions";
import Order from "../Order/Order";
import { Container, DietItem } from "./styles";


const DietsFilter = () => {
  const dispatch = useDispatch();
  const diets = useSelector((state) => state.diets);
  const selectedDiet = useSelector((state) => state.selectedDiet);

  console.log(diets);

  useEffect(() => {
    dispatch(getDietsAction());
  }, [dispatch]);

  console.log(getDietsAction());

  const handleSelectDiet = (diet) => {
    dispatch(filterRecipes(diet));
  };

  console.log(filterRecipes());
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
