
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {type: String, required:true,index:true},
    price : {type: Number,requied:true},
    imgUrl : {type:String,required:true}
},{
    collection: 'products'
}
);

const model = mongoose.model('ProductSchema',ProductSchema);

module.exports = model;
