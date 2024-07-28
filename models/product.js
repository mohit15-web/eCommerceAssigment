const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
    discountPercentage: {
      type: Number,
    },
    rating: {
      type: Number,
    },
    stock: {
      type: Number,
    },
    brand: {
      type: String,
    },
    category: {
      type: String,
    },
    thumbnail: {
      type: String,
    },
    images: {
      type: [String],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  });

const productModel = mongoose.model("Product", productSchema);
module.exports = productModel