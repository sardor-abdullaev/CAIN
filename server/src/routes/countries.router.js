const express = require("express");
const {
  getAllCountry,
  getCountry,
  getCountryByAlpha,
  getCountriesByRegion,
  checkCountry,
} = require("../controllers/countries.controller");

const countriesRouter = express.Router();

countriesRouter.param("country", checkCountry);

countriesRouter.get("/all", getAllCountry);
countriesRouter.get("/:country", getCountry);
countriesRouter.get("/alpha3/:alpha", getCountryByAlpha);
countriesRouter.get("/region/:region", getCountriesByRegion);

module.exports = countriesRouter;
