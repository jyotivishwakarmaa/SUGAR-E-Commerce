const productModel = require("../Models/ProductModel");
const homeDisplay = async (req, res) => {
  try {
    const Product = await productModel.find();
    res.status(200).send(Product);
  } catch (error) {
    res.status(401).send("error :", error.message);
  }
};

module.exports = {
  homeDisplay,
};
