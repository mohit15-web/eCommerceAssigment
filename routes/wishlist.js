
const express = require("express")
const router = express.Router()


router.get('/',wishlistController.getWishlist)
router.post('/add',wishlistController.addToWishlist)
router.post('/remove',wishlistController.removeToWishlist)

module.exports = router