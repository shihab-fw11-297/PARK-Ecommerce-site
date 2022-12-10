const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title:{type:String, require:true, unique:true},
    description:{type:String, require:true },
    image:{type:Array},
    categories:{type:String,require:true},
    size:{type:String},
    color:{type:String},
    price:{type:Number,require:true},
},{
    timestamps:true,
})

module.exports = mongoose.model('Product',productSchema);