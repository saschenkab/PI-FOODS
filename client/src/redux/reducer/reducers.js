import {
  GET_RECIPES,
  GET_DIETS,
  GET_RECIPE_INFO,
  GET_INSTRUCTIONS,
  SET_LOADING,
  FILTER_BY_DIET,
} from "../utils/constants";

const initialState = {
  recipes: [],
  recipe: {},
  diets: [],
  recipesFiltered: [],
  instructions: [],
  loading: false,
  selectedDiet: "all",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        recipesFiltered: action.payload,
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

    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case FILTER_BY_DIET:
      const recipes = [...state.recipes];
      const recipesFiltered = recipes.filter((recipe) =>
        recipe.diet.includes(action.payload)
      );

      return {
        ...state,
        selectedDiet: action.payload,
        recipesFiltered: action.payload === "all" ? recipes : recipesFiltered,
      };

    default:
      return state;
  }
};

export default rootReducer;
