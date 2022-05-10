const { Router } = require("express");
const { Diet } = require("../db");
const axios = require("axios");
const { recipeDiets } = require("../utils/endpoints");
const getRecipes = require("../utils/controllers/getRecipes");
const diets = Router();
const DIETS_LIST = [
  "gluten free",
  "dairy free",
  "paleolithic",
  "ketogenic",
  "lacto ovo vegetarian",
  "primal",
  "whole 30",
  "pescetarian",
  "fodmap friendly",
  "vegan",
];

diets.get("/", async (req, res) => {
  try {
    DIETS_LIST.forEach((diet) => {
      Diet.findOrCreate({
        where: {
          name: diet,
        },
      });
    });
    const results = await Diet.findAll();

    res.json(results);
  } catch (error) {
    console.log(error);
  }
});

// diets.get("/types", async (req, res) => {
//   try {
//     let diets = await axios.get(`${recipeDiets}`);
//     diets = diets.data.results;

//     let apiDiets = [];
//     let sortedDiets = [];

//     apiDiets = diets.map((diet) => diet.diets); //
//     apiDiets
//       .flat() // flattens the apiDiets array
//       .sort() // sorts the apiDiets
//       .forEach((diet) => {
//         // iterates over the apiDiets
//         if (!sortedDiets.includes(diet)) {
//           // checks if the sortedDiets already includes the current diet
//           sortedDiets.push(diet); // if not, it adds the diet to the sortedDiets
//         }
//       });
//     // res.json(diets.data.results);
//     res.json(sortedDiets);
//   } catch (error) {
//     console.log(error);
//   }
// });

module.exports = diets;
