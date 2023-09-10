const Countries = require("../models/countries.mongo");

async function getAllCountries(req, res) {
  return res.status(200).json(await Countries.find({}));
}

async function getCountry(req, res) {
  // {'$regex': thename,$options:'i'}
  const { country: countryName } = req.params;
  return res.status(200).json(
    await Countries.find({
      country_name: { $regex: countryName, $options: "i" },
    })
  );
}

async function getCountryByAlpha(req, res) {
  const { alpha } = req.params;
  return res.status(200).json(
    await Countries.find({
      cioc: alpha,
    })
  );
}

module.exports = { getAllCountries, getCountry, getCountryByAlpha };
