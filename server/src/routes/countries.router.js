const express = require("express");
const {
  getAllCountries,
  getCountry,
  getCountryByAlpha,
} = require("../controllers/countries.controller");

const countriesRouter = express.Router();

countriesRouter.get("/all", getAllCountries);
countriesRouter.get("/:country", getCountry);
countriesRouter.get("/alpha3/:alpha", getCountryByAlpha);

module.exports = countriesRouter;
