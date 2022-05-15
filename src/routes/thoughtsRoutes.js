const express = require("express");
const thoughts = require("../controllers/thoughts");
const thoughtsRoutes = express.Router();

thoughtsRoutes.get("/thoughts", thoughts);

module.exports = thoughtsRoutes;
