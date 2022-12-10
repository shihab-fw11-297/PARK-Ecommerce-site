const mongoose = require('mongoose');

const oerderSchema = new mongoose.Schema({
    userId:{type:string, require:true},
    products:[{
        productId:{type:string},
        quantity:{type:Number, default:1},
    }],
    amount:{type:Number, require:true},
    address:{type:object, require:true},
    status:{type:string, default:'pending'},
},{
    timestamps:true,
})

module.exports = mongoose.model('Order',oerderSchema);