const express = require("express");
const countryRouter=require("./routes/countries.router");

const app = express();

app.use(express.json());

app.use('/',countryRouter);

module.exports = app;
