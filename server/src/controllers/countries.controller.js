const Countries = require("../models/countries.mongo");

async function getCountryByName(name) {
  return await Countries.find({
    country_name: { $regex: name, $options: "i" },
  });
}

function checkCountry(req, res, next, val) {
  console.log("check country " + val);
  const result = getCountryByName(val);
  if (!result.length) {
    return res
      .status(404)
      .json({ status: "fail", message: "Not found such a country" });
  }
  next();
}

async function getAllCountry(req, res) {
  return res.status(200).json(await Countries.find({}));
}

function getCountry(req, res) {
  // {'$regex': thename,$options:'i'}
  const { country: countryName } = req.params;
  return res.status(200).json(getCountryByName(countryName));
}

async function getCountryByAlpha(req, res) {
  const { alpha } = req.params;
  return res.status(200).json(
    await Countries.find({
      cioc: alpha,
    })
  );
}

async function getCountriesByRegion(req, res) {
  const { region } = req.params;
  // return res.status(200).json(await Countries.find({ region }));
  return res.status(200).json(
    await Countries.find({
      region: { $regex: region, $options: "i" },
    })
  );
}

module.exports = {
  getAllCountry,
  getCountry,
  getCountryByAlpha,
  getCountriesByRegion,
  checkCountry,
};
