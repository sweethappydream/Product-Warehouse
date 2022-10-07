require("dotenv").config();
const mongoose = require("mongoose");
const ExtraProp = require("./models/extraProp");
mongoose
  .connect(process.env.dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to Database");
    ExtraProp.init();
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });