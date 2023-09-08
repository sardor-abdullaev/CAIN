const fs = require("fs");
const path = require("path");

const { mongoConnect, mongoDisconnect } = require("../services/mongo");
const Country = require("../models/countries.mongo");

mongoConnect();

try {
  const countries = JSON.parse(
    fs.readFileSync(path.join(__dirname, "countries.json"))
  );

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
} catch (error) {
  console.error(error);
}

mongoDisconnect();
