const productModel = require('../models/product')
const createProduct = async (req, res) => {
    try {
      let newData = await productModel.create(req.body)
      res.json({
        success: true,
        message: "Product created successfully",
    })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Product not created",
        }) 
    }
    
}

const getProducts = async (req, res) => {
    const pageSize = req.query.pageSize || 1; //No of items per page
    const pageNo = req.query.pageNo || 1; //current page no
    const minPrice = req.query.minPrice || 0; 
    const sortBy = req.query.sort === 'ASC' ? 1 : -1; 

    const productList = await productModel.find({
        price: {
          $gte: minPrice,
        },
        isActive:true
      })
        .sort({ price: sortBy }) // 1 for ascending, -1 for descending
        .limit(pageSize)
        .skip((pageNo - 1) * pageSize);
      res.json({
        success: true,
        results: productList,
      });
}

const editProducts = async (req, res) => {
    let id = req.params.productId
    let newData = await productModel.findByIdAndUpdate(id , req.body)
    res.json({
        success: true,
        message: "Products updated successfully",
    })
}
const deleteProducts = async (req, res) => {

    let id = req.params.productId
    let newData = await productModel.findByIdAndDelete(id)
    res.json({
        success: true,
        message: "Products deleted successfully",
    })
}
const productsController = {
    createProduct,
    getProducts,
    deleteProducts,
    editProducts
}

module.exports = productsController