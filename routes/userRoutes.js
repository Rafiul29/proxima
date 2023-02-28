const express = require("express");
const { loginUser, signupUser } = require("../controllers/userController");
//route
const route = express.Router();

//login user
route.post("/login", loginUser);

//singup user
route.post("/signup", signupUser);

module.exports = route;
