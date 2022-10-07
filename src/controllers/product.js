const Product = require("../models/product");

exports.getProductList = (req, res) => {
  if (req.query.category_id == 0) {
    Product.find().exec((err, data) => {
      if (err) {
        res.status(500).send("Server Error");
      }
      res.status(200).send(data);
    });
  } else {
    Product.find({ extraProp: req.query.category_id }).exec((err, data) => {
      if (err) {
        res.status(500).send("Server Error");
      }
      res.status(200).send(data);
    });
  }
};

exports.addProduct = (req, res) => {
  const data = req.body;
  const product = new Product({
    name: data.name,
    SKU: data.sku,
    brand: data.brand,
    cost: data.cost,
    extraProp: data.category,
    specific: data.spec,
  });
  product.save(function (err, product) {
    if (err) res.status(500).send({ message: err });
    else res.send({ message: "Product was registered successfully!" });
  });
};
