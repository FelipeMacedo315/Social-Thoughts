const express = require("express");
const loginGet = require("../controllers/LoginGet");
const routesLogin = express.Router();

routesLogin.get("/Login", loginGet);

module.exports = routesLogin;
