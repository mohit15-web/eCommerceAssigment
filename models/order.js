const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    items: {
        type: [itemsSchema],
      },
      totalAmount: {
        type: Number,
      },
      deliveryAddress: {
        type: addressSchema,
      },
      billingAddress: {
        type: addressSchema,
      },
      modeOfPayment: {
        type: String,
        enum: ["COD", "ONLINE"],
      },
      orderStatus: {
        type: String,
        enum: [
          "PENDING",
          "IN_PROCESS",
          "SHIPPED",
          "OUT_FOR_DELIVERY",
          "DELIVERED",
          "RETURNED",
          "CANCELLED",
        ],
        default: "PENDING",
      },
      user: {
        type: mongoose.Types.ObjectId,
        ref: "users",
      },
}, {timestamps:true})

let orderModel = mongoose.model("/orders",orderSchema)
module.exports = orderModel