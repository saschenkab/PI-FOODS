const { Router } = require("express");
const { Recipe, Diet } = require("../db");
const createRecipe = Router();

createRecipe.post("/recipe", async (req, res) => {
  const { name, summary, score, healthScore, instructions, diet } = req.body;

  let diets = await Diet.findAll();

  console.log(diets);
  try {
    const newRecipe = await Recipe.create({
      name,
      summary,
      score,
      healthScore,
      instructions,
      diet,
    });

    await newRecipe.setDiets(diets);
    return res.json(newRecipe);
  } catch (error) {
    console.log(error);
  }
});

module.exports = createRecipe;
