const ExtraProp = require("../models/extraProp");

exports.getAllList = (req, res) => {
  ExtraProp.find().exec((err, types) => {
    if (err) {
      res.status(500).send("Server Error");
    }
    res.status(200).send(types);
  });
};
