const { mongoConnect, mongoDisconnect } = require("../services/mongo");
const Country = require("../models/countries.mongo");

async function fetchData() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const countries = await response.json();

  countries.forEach(async (val, i) => {
    const {
      name: { common: country_name },
      capital = [],
      region,
      currencies,
      languages,
      cioc,
      borders = [],
      area, //km square
      population,
      flags: { png: flag },
      coatOfArms: { png: coatOfArm },
    } = val;

    await Country.create({
      country_name,
      capital,
      region,
      currencies,
      languages,
      cioc,
      borders,
      area,
      population,
      flag,
      coatOfArm,
    });
  });
}
try {
  mongoConnect();
  fetchData();
  // mongoDisconnect();
} catch (error) {
  console.error(error);
}
