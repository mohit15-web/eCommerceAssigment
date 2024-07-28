const express = require('express')
const router = express.Router()

router.post("/",orderController.placeOrder)

module.exports = router;