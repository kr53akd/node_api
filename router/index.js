const app = require("express").Router();

app.use("/users", require("./UserRoute"))

module.exports = app;