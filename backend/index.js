console.log("servidor index funcionando")

const express = require("express");
const app = express();
const cors = require('cors');
const routes = require('./routes');

app.use(cors());
app.use(express.json());
app.use(routes);

//localhost:8080
app.listen(8080);