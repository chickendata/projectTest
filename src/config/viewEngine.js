const path = require("path");
const express = require("express");
const session = require("express-session");

const configViewEngine = (app) => {
  app.use(
    session({
      secret: "webLesson",
      resave: true,
      saveUninitialized: true,
    })
  );
  app.set("views", path.join("./src", "views"));
  app.set("view engine", "ejs");
  app.use(express.static(path.join("./src", "public")));
};

module.exports = configViewEngine;
