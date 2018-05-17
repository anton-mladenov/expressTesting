const express = require('express')
const app = express()
const printRouter = require("./firstModule.js");

app.use("/", printRouter);

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
