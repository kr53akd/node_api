const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;

require('./database/db.config');
app.use(express.json());

app.get("/",(req, res)=>{
    res.json({message:"Okay"})
});

app.use("/api", require("./router/index"));

app.use("*",(req, res)=>{
    res.json({message:"URL not found 404"})
})


app.listen(port,()=>{console.log(`Server is running at port ${port}`)});