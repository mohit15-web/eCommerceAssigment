const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/user");
const productRouter = require("./routes/products");
const wishlistRouter = require("./routes/wishlist");
const authMiddleware = require("./middlewares/authMiddleware");
const errorHandlingMiddleware = require("./middlewares/errorMiddleware");
const app = express();

app.use(express.json());

app.use("/api/v1/user/", userRouter);
app.use("/api/v1/product/", productRouter);
app.use("/api/v1/wishlist/", authMiddleware, wishlistRouter);
mongoose
  .connect("mongodb://localhost:27017/eCommerce")
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(errorHandlingMiddleware);

app.listen(8000, () => {
  console.log("Server is running on port 3000");
});
