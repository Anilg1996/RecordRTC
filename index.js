const express = require('express');
const mongoose = require('mongoose');
const route = require("./routes/route");
const dotenv = require("dotenv").config();
const dbConnect = require("./config/dbConnect");
const app = express();
dbConnect()
app.use(express.json());


 app.use('/', route);

 app.listen(process.env.PORT || 4000, () => {
    console.log("Hukum Mere Aaka i am running on Port " + (process.env.PORT || 4000));
  });
