const express = require("express");
const deleteThought = require("../controllers/deleteThought");
const deleteThoughtRoutes = express.Router();

deleteThoughtRoutes.post("/deleteThought/:idThought", deleteThought);

module.exports = deleteThoughtRoutes;
