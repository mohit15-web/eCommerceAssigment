
const placeOrder = async(req,res) => {
    try {
        
    } catch (error) {
        res.json({
            success:false,
            message:"order not placed"
        })
    }
}

const orderController = {
    placeOrder
}

module.exports = orderController