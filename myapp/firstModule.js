const express = require("express");

const printRouter = express.Router();

const smth = {
  a: "That's something major, bruh!",
  b: "You are definitely becoming a F developer!"
};

printRouter.get("/", (req, res, next) => {
  res.send(`${smth.a} ${smth.b}`);
});

module.exports = printRouter;
