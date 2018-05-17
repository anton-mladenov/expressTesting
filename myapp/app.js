const express = require('express')
const app = express()
const smth = require("./firstModule.js");

app.get('/', (req, res) => {
  res.send(smth);
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
