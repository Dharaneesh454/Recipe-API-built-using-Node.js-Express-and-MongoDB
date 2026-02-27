const mongoose = require("mongoose");
const recipeschema = new mongoose.Schema({
    title: String,
    cuisine: String,
    rating: Number,
    total_time: Number,
    description: String
});

module.exports = mongoose.model("Recipe",recipeschema);