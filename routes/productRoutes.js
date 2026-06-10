const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

router.post("/save/product", async (req, res) => {

  try {

    const product =
      new Product(req.body);

    await product.save();

    res.status(200).json({
      message: "Product Saved"
    });

  }
  catch(error){

    console.log(error);

    res.status(500).json({
      message: "Error Saving Product"
    });

  }

});

router.get("/products", async (req, res) => {

  try {

    const products =
      await Product.find();

    res.status(200).json(products);

  }
  catch(error){

    console.log(error);

    res.status(500).json({
      message: "Error Fetching Products"
    });

  }

});

router.delete("/product/:id", async (req, res) => {

  try {

    await Product.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      message: "Product Deleted"
    });

  }
  catch(error){

    console.log(error);

    res.status(500).json({
      message: "Error Deleting Product"
    });

  }

});

router.put("/product/:id", async (req, res) => {

  try {

    await Product.findByIdAndUpdate(
      req.params.id,
      req.body
    );

    res.status(200).json({
      message: "Product Updated"
    });

  }
  catch(error){

    console.log(error);

    res.status(500).json({
      message: "Error Updating Product"
    });

  }

});

module.exports = router;