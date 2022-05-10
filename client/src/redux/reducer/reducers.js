import {
  GET_RECIPES,
  GET_DIETS,
  GET_RECIPE_INFO,
  GET_INSTRUCTIONS,
} from "../utils/constants";

const initialState = {
  recipes: [],
  recipe: {},
  diets: [],
  filters: [],
  instructions: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
      };

    case GET_DIETS:
      return {
        ...state,
        diets: action.payload,
      };

    case GET_RECIPE_INFO:
      return {
        ...state,
        recipe: action.payload,
      };

    case GET_INSTRUCTIONS:
      return {
        ...state,
        instructions: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
