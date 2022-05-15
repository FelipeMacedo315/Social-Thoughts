const express = require("express");
const {registeredGet,registeredPost} = require('../controllers/registered')
const registeredRoutes = express.Router();

registeredRoutes.use(express.urlencoded({ extended: true }));



registeredRoutes.get("/registered",registeredGet );

registeredRoutes.post("/registeredPost", registeredPost);

module.exports = registeredRoutes;
