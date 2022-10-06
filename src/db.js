const mongoose = require("mongoose");
const ExtraProp = require("./models/extraProp");
const dbURI = require("./config");
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    ExtraProp.init();
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });