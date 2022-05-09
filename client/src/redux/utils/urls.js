const getRecipes = `http://localhost:3001/recipes`;

const getRecipeById = `http://localhost:3001/recipes/recipe/`;

const getRecipeByName = `http://localhost:3001/recipes?name=`;

const getDiets = `http://localhost:3001/diets`;

const createRecipe = `http://localhost:3001/createRecipe/recipe`;

module.exports = {
  getRecipes,
  getRecipeById,
  getRecipeByName,
  getDiets,
  createRecipe,
};
