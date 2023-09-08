const mongoose = require("mongoose");

const countriesSchema = new mongoose.Schema({
  country_name: { type: String },
  capital: [String],
  region: { type: String },
  currencies: {},
  languages: {},
  cioc: String,
  borders: [String],
  area: Number,
  population: Number,
  flag: String,
  coatOfArm: String,
});

module.exports = mongoose.model("Country", countriesSchema);
