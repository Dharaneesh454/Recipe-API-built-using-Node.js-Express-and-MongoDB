const express = require("express");
const router = express.Router();

const{
    getRecipes,
    createRecipe,
    searchRecipes
} = require("../controllers/recipeController");
router.get("/",getRecipes);
router.post("/",createRecipe);
router.get("/search",searchRecipes);

module.exports = router;