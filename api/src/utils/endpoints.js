const { APIKEY, APIKEY_TWO } = process.env;

const apiKey = `apiKey=${APIKEY}`;

const urlBase = `https://api.spoonacular.com/recipes/`;

const recipesLimit = "number=100";

const recipeInformation = `addRecipeInformation=true`;

const recipeSearch = `${urlBase}complexSearch?${apiKey}&${recipeInformation}&${recipesLimit}`;

const recipeDiets = `${urlBase}complexSearch?${apiKey}&${recipeInformation}&${recipesLimit}&diet=`;

const recipeByName = `${urlBase}complexSearch?${recipeInformation}&${apiKey}&${recipesLimit}&query=`;

const recipeById = `https://api.spoonacular.com/recipes/{id}/information${apiKey}`;

module.exports = {
  apiKey,
  recipesLimit,
  recipeSearch,
  recipeByName,
  recipeById,
  recipeDiets,
};
