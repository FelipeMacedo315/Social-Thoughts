const express = require("express");
const thoughts = require("../controllers/thoughts");
const {updateThoughtsPost, updateThoughtsGet} = require("../controllers/updateThought");
const thoughtsRoutes = express.Router();

thoughtsRoutes.use(express.urlencoded({extended: true}));

thoughtsRoutes.get("/thoughts", thoughts.thoughts);
thoughtsRoutes.post("/createthoughts", thoughts.createThoughts);
thoughtsRoutes.post("/updateThought/:idThoughtAtualized", updateThoughtsPost);
thoughtsRoutes.get("/updateThought/:idThought", updateThoughtsGet);
module.exports = thoughtsRoutes;
