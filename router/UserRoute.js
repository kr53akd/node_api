const { userList, userRegistration, userUpdate, userDelete } = require("../contoller/userController/userController");

const route = require("express").Router();

route.get("/list", userList);
route.post("/register", userRegistration);
route.put('/:id',userUpdate);
route.delete('/:id',userDelete);


module.exports = route;