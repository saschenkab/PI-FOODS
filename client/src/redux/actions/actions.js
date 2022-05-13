import {
  GET_RECIPES,
  GET_RECIPE_INFO,
  GET_DIETS,
  SET_LOADING,
  ORDER,
  ORDER_BY_HEALTH_SCORE,
  ORDER_BY_SCORE,
  FILTER_BY_DIET,
  GET_RECTIPE_BY_NAME,
  CREATE_RECIPE,
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

export const getRecipeByNameAction = (payload) => async (dispatch) => {
  const response = await axios.get(`${getRecipeByName}${payload}`);

  dispatch({
    type: GET_RECTIPE_BY_NAME,
    payload: response.data,
  });
};

export const postRecipeAction = (payload) => async (dispatch) => {
  const response = await axios.post(
    `http://localhost:3001/createRecipe/recipe`,
    payload
  );

  dispatch({
    type: CREATE_RECIPE,
    payload: response.data,
  });
};

export const orderAction = (payload) => async (dispatch) => {
  dispatch({
    type: ORDER,
    payload,
  });
};

export const orderByScoreAction = (payload) => async (dispatch) => {
  dispatch({
    type: ORDER_BY_SCORE,
    payload,
  });
};

export const orderByHealthScoreAction = (payload) => async (dispatch) => {
  dispatch({
    type: ORDER_BY_HEALTH_SCORE,
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
