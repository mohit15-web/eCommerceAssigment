const userSchema = require("../models/user");

const getWishlist = async (req, res, next) => {
  try {
    const userId = req.user._id;

    if (!userId) {
      throw new customError("user not found", 404);
    }
    const wishlist = await userSchema
      .findById(userId)
      .populate("wishlist")
      .select("wishlist");
    res.json({
      success: true,
      message: "Get Wishlist API",
      result: wishlist,
    });
  } catch (err) {
    next(err);
  }
};

const addToWishlist = async (req, res, next) => {
  try {
    const userId = req.user._id;

    if (!userId) {
      throw new customError("user not found", 404);
    }

    await userSchema.findByIdAndUpdate(userId, {
      $push: { wishlist: req.body.productId },
    });
    res.json({
      success: true,
      message: "Add Wishlist API",
    });
  } catch (err) {
    next(err)
  }
};
const removeToWishlist = async (req, res, next) => {
  try {
    const userId = req.user._id;

    if (!userId) {
      throw new customError("user not found", 404);
    }

    await userSchema.findByIdAndUpdate(userId, {
      $pull: { wishlist: req.body.productId },
    });
    res.json({
      success: true,
      message: "Remove Wishlist API",
    });
  } catch (error) {
    next(error);
  }
};

const wishlistController = {
  getWishlist,
  addToWishlist,
  removeToWishlist,
};

module.exports = wishlistController;
