const { APIKEY, APIKEY_TWO, APIKEY_THREE } = process.env;

const apiKey = `apiKey=${APIKEY_TWO}`;

const urlBase = `https://api.spoonacular.com/recipes/`;

const recipesLimit = "number=100";

const recipeInformation = `addRecipeInformation=true`;

const recipeSearch = `${urlBase}complexSearch?${apiKey}&${recipeInformation}&${recipesLimit}`;

const recipeByName = `${urlBase}complexSearch?${recipeInformation}&${apiKey}&${recipesLimit}&query=`;

const recipeById = `https://api.spoonacular.com/recipes/{id}/information${apiKey}`;

module.exports = {
  apiKey,
  recipesLimit,
  recipeSearch,
  recipeByName,
  recipeById,
};
