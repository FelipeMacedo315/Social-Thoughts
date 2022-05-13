const express = require("express");
const registeredGet = require("../controllers/regiteredGet");
const registeredRoutes = express.Router();

registeredRoutes.get("/registered", registeredGet);

module.exports = registeredRoutes;
