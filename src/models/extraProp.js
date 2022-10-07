const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ExtraPropSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  spec: {
    type: Object,
    required: true,
  },
});
const ExtraProp = mongoose.model("ExtraProp", ExtraPropSchema);

ExtraProp.init = async () => {
  await ExtraProp.deleteMany({}, function () {
    console.log("table is initialized");
  });
  const extraProp1 = new ExtraProp({
    name: "TV",
    spec: {
      spec1: { "Screen Type": ["LED", "LCD", "OLED"] },
      spec2: "Screen Size",
    },
  });
  extraProp1.save(function (err, book) {
    if (err) return console.log("db initialize failed!");
  });
  const extraProp2 = new ExtraProp({
    name: "Laptops",
    spec: {
      spec1: { Processor: ["Intel", "AMD"] },
      spec2: "Ram Memory",
    },
  });
  extraProp2.save(function (err, book) {
    if (err) return console.log("db initialize failed!");
  });
  const extraProp3 = new ExtraProp({
    name: "Shoes",
    spec: {
      spec1: { Material: ["Leather", "Plastic"] },
      spec2: "Number/Size",
    },
  });
  extraProp3.save(function (err, book) {
    if (err) return console.log("db initialize failed!");
  });
};
module.exports = ExtraProp;
