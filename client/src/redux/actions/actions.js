import {
  GET_RECIPES,
  GET_RECIPE_INFO,
  GET_DIETS,
  SET_LOADING,
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
  dispatch({
    type: SET_LOADING,
    payload: true,
  });

  const response = await axios.get(getRecipes);

  dispatch({
    type: GET_RECIPES,
    payload: response.data,
  });

  dispatch({
    type: SET_LOADING,
    payload: false,
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

export const filterRecipes = (payload) => async (dispatch) => {
  console.log(
    "🚀 ~ file: actions.js ~ line 60 ~ filterRecipes ~ payload",
    payload
  );
  dispatch({
    type: FILTER_BY_DIET,
    payload,
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
