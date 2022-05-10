import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getRecipeInfoAction } from "../../redux/actions/actions";
import HeaderBar from "../../components/HeaderBar";
import styled from "styled-components";
import { primaryColor, secondaryColor, white } from "../../utils/colors";

const Container = styled.div`
  margin-top: 50px;
`;

const CardRecipeDetail = styled.div`
  width: 60%;
  margin: 0 auto;
  border-radius: 40px;
  position: relative;

  img {
    width: 100%;
    border-radius: 40px;
    margin-bottom: 20px;
  }
`;

const CardBody = styled.div`
  background-color: ${white};
  padding: 20px;
  border-radius: 40px;
  border: 5px solid ${primaryColor};
`;

const CardTitle = styled.div`
  font-size: 25px;
  font-weight: 700;
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

const RecipeDetail = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getRecipeInfoAction(id));
  }, [dispatch, id]);

  const recipeInfo = useSelector((state) => state.recipe);

  if (Object.keys(recipeInfo).length === 0) {
    return (
      <Container>
        <HeaderBar />
        no hay nada
      </Container>
    );
  }

  let ingredients = [];
  ingredients = recipeInfo.instructions[0].steps.map((step) => {
    return step.ingredients;
  });

  const flattenIngredients = ingredients?.flat();
  const filterIngredients = flattenIngredients?.filter(
    (value, index, array) =>
      array.findIndex((value2) => value2.id === value.id) === index
  );

  return (
    <div>
      <HeaderBar />
      <Container>
        <CardRecipeDetail>
          <CardBody>
            <img src={recipeInfo?.image} alt={recipeInfo?.title} />
            <CardDiets>
              {recipeInfo.diet?.map((diets) => (
                <p key={diets}>{diets}</p>
              ))}
            </CardDiets>
            <CardTitle>{recipeInfo?.title}</CardTitle>
            <div>Score: {recipeInfo?.score}</div>
            <div>Health Score: {recipeInfo?.healthScore}</div>
            <div>
              <p dangerouslySetInnerHTML={{ __html: recipeInfo?.summary }} />
            </div>

            <h2>Ingredients:</h2>
            <ul>
              {filterIngredients?.map((ingredient) => (
                <li key={ingredient.id}>
                  {ingredient.name}
                </li>
              ))}
            </ul>

            <h2>Instructions:</h2>
            <ul>
              {recipeInfo?.instructions?.length > 0 &&
                recipeInfo.instructions[0].steps?.map((step) => (
                  <span key={step.number}>
                    <li>{step.step}</li>
                  </span>
                ))}
            </ul>
          </CardBody>
        </CardRecipeDetail>
      </Container>
    </div>
  );
};

export default RecipeDetail;
