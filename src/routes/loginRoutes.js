const express = require("express");
const {loginGet, loginPost} = require("../controllers/login");
const routesLogin = express.Router();

routesLogin.use(express.urlencoded({extended: true}));

routesLogin.get("/Login", loginGet);
routesLogin.post("/LoginPost", loginPost);

module.exports = routesLogin;
