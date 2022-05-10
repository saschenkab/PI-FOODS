const { Router } = require("express");
const axios = require("axios");
const { Recipe, Diet } = require("../db");
const { Op } = require("sequelize");
const { recipeByName, apiKey } = require("../utils/endpoints");
const getRecipes = require("../utils/controllers/getRecipes");

const recipe = Router();

recipe.get("/", async (req, res) => {
  const { name } = req.query;

  if (name) {
    try {
      let recipesByName = await axios.get(`${recipeByName}${name}`);
      // console.log(recipesByName);
      const apiRecipes = recipesByName.data.results.map((recipe) => {
        return {
          id: recipe.id,
          title: recipe.title,
          //   summary: recipe.summary,
          score: recipe.spoonacularScore,
          healthScore: recipe.healthScore,
          readyinMinutes: recipe.readyInMinutes,
          servings: recipe.servings,
          image: recipe.image,
          //   instructions: recipe.analyzedInstructions,
        };
      });

      let databaseRecipes = await Recipe.findAll({
        where: {
          name: {
            [Op.iLike]: "%" + name + "%", // case insensitive
          },
        },
        include: { model: Diet },
      });

      console.log(databaseRecipes);

      databaseRecipes = databaseRecipes.map((recipe) => {
        return {
          id: recipe.id,
          title: recipe.name,
          diets: recipe.diet ? recipe.diet.map((diet) => diet.name) : [],
          summary: recipe.summary,
          score: recipe.score,
          healthScore: recipe.healthScore,
          image: recipe.image,
          instructions: recipe.instructions,
        };
      });

      let allRecipes = [].concat(apiRecipes, databaseRecipes);

      return res.json(allRecipes);
    } catch (error) {
      console.log(error);
      return res.json({ error: "There is no recipe with that name" });
    }
    // } else {
    //   console.log("There is no recipe with that name");
    //   return res.status(503).send({ msg: "There is no recipe by that name" });
  }
  const apiRecipes = await getRecipes();

  return res.json(apiRecipes);
});

recipe.get("/recipe/:id", async (req, res) => {
  console.log("recipe id", req.params["id"]);
  const { id } = req.params;
  console.log(id);
  if (id) {
    try {
      let recipeById = await axios.get(
        `https://api.spoonacular.com/recipes/${id}/information?${apiKey}`
      );
      recipeById = recipeById.data;
      // console.log(recipeById);

      if (Object.keys(recipeById).length > 1) {
        return res.json({
          id: recipeById.id,
          title: recipeById.title,
          diet: recipeById.diets,
          image: recipeById.image,
          summary: recipeById.summary,
          score: recipeById.spoonacularScore,
          healthScore: recipeById.healthScore,
          readyinMinutes: recipeById.readyInMinutes,
          servings: recipeById.servings,
          instructions: recipeById.analyzedInstructions,
        });
      }

      // res.json(recipeByIdMapped);
    } catch (error) {
      console.log(error);
    }
  }

  try {
    let databaseRecipeID = await Recipe.findByPk(id, {
      include: { model: Diet },
    });
    if (databaseRecipeID) {
      return res.json({
        id: databaseRecipeID.id,
        title: databaseRecipeID.name,
        diet: databaseRecipeID.diet
          ? databaseRecipeID.diet.map((diet) => diet.name)
          : [],
        summary: databaseRecipeID.summary,
        score: databaseRecipeID.score,
        healthScore: databaseRecipeID.healthScore,
        image: databaseRecipeID.image,
        instructions: databaseRecipeID.instructions,
      });
    }
  } catch (error) {
    console.log(error);
    return res.json({ error: `There is no recipe with id ${id}` });
  }
});

module.exports = recipe;
