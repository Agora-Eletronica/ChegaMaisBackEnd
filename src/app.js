const express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  cors = require("cors"),
  helmet = require("helmet");

const mainRoute = require("./routes/route");

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(mainRoute);

module.exports = app;
