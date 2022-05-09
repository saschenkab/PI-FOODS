import {
  GET_RECIPES,
  GET_RECIPE_INFO,
  GET_DIETS,
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
