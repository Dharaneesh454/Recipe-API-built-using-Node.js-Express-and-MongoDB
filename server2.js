const express = require("express");
const connectDB = require("./config/db");
const recipeRoutes = require("./routes/recipeRoutes");
const app = express();
app.use(express.json());
connectDB();
app.use("/recipes",recipeRoutes);
app.listen(3000,()=>{
    console.log("server running");
});