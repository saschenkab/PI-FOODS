import {
  GET_RECIPES,
  GET_DIETS,
  GET_RECTIPE_BY_NAME,
  GET_RECIPE_INFO,
  GET_INSTRUCTIONS,
  SET_LOADING,
  FILTER_BY_DIET,
  CREATE_RECIPE,
  ORDER,
  ORDER_BY_SCORE,
  ORDER_BY_HEALTH_SCORE,
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

    case GET_RECTIPE_BY_NAME:
      return {
        ...state,
        recipesFiltered: action.payload,
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
      console.log(recipesFiltered);

      return {
        ...state,
        selectedDiet: action.payload,
        recipesFiltered: action.payload === "all" ? recipes : recipesFiltered,
      };

    case CREATE_RECIPE:
      return {
        ...state,
      };

    case ORDER:
      let recipesOrder = [...state.recipesFiltered];
      let order = recipesOrder.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          if (action.payload === "asc") {
            return -1;
          } else {
            return 1;
          }
        }

        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          if (action.payload === "desc") {
            return -1;
          } else {
            return 1;
          }
        }
        return 0;
      });

      return {
        ...state,
        recipesFiltered: order,
      };

    case ORDER_BY_SCORE:
      let recipesOrderByScore = [...state.recipesFiltered];
      let orderByScore = recipesOrderByScore.sort((a, b) => {
        if (a.score < b.score) {
          if (action.payload === "max") {
            return -1;
          } else {
            return 1;
          }
        }

        if (a.score > b.score) {
          if (action.payload === "min") {
            return -1;
          } else {
            return 1;
          }
        }
        return 0;
      });
      return {
        ...state,
        recipesFiltered: orderByScore,
      };

    case ORDER_BY_HEALTH_SCORE:
      let recipesOrderByHealthScore = [...state.recipesFiltered];
      let orderByHealthScore = recipesOrderByHealthScore.sort((a, b) => {
        if (a.healthScore < b.healthScore) {
          if (action.payload === "max") {
            return -1;
          } else {
            return 1;
          }
        }

        if (a.healthScore > b.healthScore) {
          if (action.payload === "min") {
            return -1;
          } else {
            return 1;
          }
        }
        return 0;
      });
      return {
        ...state,
        recipesFiltered: orderByHealthScore,
      };

    default:
      return state;
  }
};

export default rootReducer;
