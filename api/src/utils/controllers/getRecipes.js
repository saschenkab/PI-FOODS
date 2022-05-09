const axios = require("axios");
const { recipeSearch } = require("../endpoints");
const { APIKEY } = process.env;

const getRecipes = async () => {
  let recipes = undefined;

  try {
    recipes = await axios.get(`${recipeSearch}`);
    recipes = recipes.data.results;
    // console.log(recipes)
  } catch (error) {
    console.log(error.message);
  }

  recipes = recipes?.map((recipe) => {
    return {
      id: recipe.id,
      name: recipe.title,
      summary: recipe.summary,
      score: recipe.spoonacularScore,
      healthScore: recipe.healthScore,
      instructions: recipe.analyzedInstructions,
      diet: recipe.diets,
    };
  });
  return recipes;
};

module.exports = getRecipes;
