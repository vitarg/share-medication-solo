const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const fileUpload = require("express-fileupload");
const chalk = require("chalk");

const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(cors());
app.use(fileUpload());
app.use(require("./routes/index"));

mongoose.connect(process.env.MONGO).then(() => {
  app.listen(process.env.PORT, () =>
    console.log(chalk.bgGreen.black("Server has been started..."))
  );

  console.log(chalk.bgGreen.black("Connected with MongoDB"));
});
