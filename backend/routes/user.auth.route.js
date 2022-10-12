const express = require("express");
const route = express.Router();
const {login,register} = require("../controller/user.auth.controller");

route.post("/user/login",login);
route.post("/user/register",register);

module.exports = route;