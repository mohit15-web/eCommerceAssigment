const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        required: true,
        enum: ['CUSTOMER', 'ADMIN'],
    },
    password: {
        type: String,
        required: true
    },
    wishlist : {
        type : [mongoose.Types.ObjectId],
        required:false,
        default:[],
        ref:"products"
    }
});

const userSchema = mongoose.model('User', LoginSchema);
module.exports = userSchema

