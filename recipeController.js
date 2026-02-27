const Recipe = require("../models/Recipe");

// GET ALL RECIPES
exports.getRecipes = async (req, res) => {
  try {
    exports.getRecipes = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 5;
  const skip = (page - 1) * limit;

  const recipes = await Recipe.find()
    .skip(skip)
    .limit(limit);

  const total = await Recipe.countDocuments();

  res.json({
    page,
    total,
    data: recipes
  });
};
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// CREATE RECIPE
exports.createRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.create(req.body);
    res.json(recipe);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// SEARCH RECIPES
exports.searchRecipes = async (req, res) => {
  const query = {};

  if (req.query.title) {
    query.title = { $regex: req.query.title, $options: "i" };
  }

  if (req.query.cuisine) {
    query.cuisine = req.query.cuisine;
  }

  if (req.query.rating) {
    query.rating = { $gte: Number(req.query.rating) };
  }

  const results = await Recipe.find(query);
  res.json(results);
};