const express = require("express");
const {
  getAllCountries,
  getCountry,
} = require("../controllers/countries.controller");

const countriesRouter = express.Router();

countriesRouter.get("/all", getAllCountries);
countriesRouter.get("/:country", getCountry);

module.exports = countriesRouter;
