import { GET_RECIPES } from "../utils/constants";

const initialState = {
  recipes: [],
  recipe: {},
  diets: [],
  filters: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
