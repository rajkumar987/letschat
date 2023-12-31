const express = require("express");
const cors = require("cors");
const path = require("path");
const routes = require("./routes/");

module.exports = (app, router) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static(path.join(__dirname, "public")));
  app.use(cors());

  routes(app, router);
};
