const express = require("express");
const router = express.Router();
const productsController = require("../controller/products");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/create", productsController.createProduct);
router.get("/list", productsController.getProducts);
router.delete('/delete/:productId',productsController.deleteProducts)
router.post('/edit/:productId',productsController.editProducts)

module.exports = router