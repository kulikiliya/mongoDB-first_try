const mongoose = require("mongoose");
require("dotenv").config();
const { DB_HOST } = process.env;
// console.log(process.env);

mongoose
  .connect(DB_HOST)
  .then(() => console.log("Connected.Are you sure?"))
  .catch((error) => console.log(error));
