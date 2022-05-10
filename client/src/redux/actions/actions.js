import {
  GET_RECIPES,
  GET_RECIPE_INFO,
  GET_DIETS,
  GET_INSTRUCTIONS,
  ORDER_BY_NAME,
  ORDER_BY_SCORE,
  FILTER_BY_DIET,
} from "../utils/constants";
import {
  getRecipes,
  getRecipeById,
  getRecipeByName,
  getDiets,
  createRecipe,
} from "../utils/urls";
import axios from "axios";

export const getRecipesAction = () => async (dispatch) => {
  const response = await axios.get(getRecipes);

  dispatch({
    type: GET_RECIPES,
    payload: response.data,
  });
};

export const getDietsAction = () => async (dispatch) => {
  const response = await axios.get(getDiets);

  dispatch({
    type: GET_DIETS,
    payload: response.data,
  });
};

export const getRecipeInfoAction = (payload) => async (dispatch) => {
  const response = await axios.get(
    `http://localhost:3001/recipes/recipe/${payload}`
  );

  dispatch({
    type: GET_RECIPE_INFO,
    payload: response.data,
  });
};

// export const getInstructionsAction = (payload) => async (dispatch) => {
//   const response = await axios.get(
//     `http://localhost:3001/recipes/recipe/${payload}`
//   );

//   dispatch({
//     type: GET_INSTRUCTIONS,
//     payload: response.data,
//   });
// };
