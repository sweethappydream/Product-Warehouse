const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProductSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  SKU: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  extraProp: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "extraProp",
  },
  specific: Object,
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
