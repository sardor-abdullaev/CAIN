const http = require("http");
const mongoose = require("mongoose");

require("dotenv").config();

const app = require("./app");
const { mongoConnect } = require("./services/mongo");

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
  mongoConnect();
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
}

startServer();



// const express=require("express");

// const app=express();
// app.listen(PORT, () => {
//     console.log(`Listening on port ${PORT}`);
//   });