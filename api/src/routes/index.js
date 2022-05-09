const { Router } = require("express");
const router = Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const recipesRoute = require("./recipes.js");
const diets = require("./diets");
const createRecipe = require("./createRecipe");

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/recipes", recipesRoute);
router.use("/diets", diets);
router.use("/createRecipe", createRecipe);

module.exports = router;
