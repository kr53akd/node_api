const { userList, userRegistration } = require("../contoller/userController/userController");

const route = require("express").Router();

route.get("/list", userList);
route.post("/register", userRegistration);


module.exports = route;