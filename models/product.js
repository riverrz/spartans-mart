const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema=new Schema({
	category:{type:Schema.Types.ObjectId, ref:'Category'}, //category.js to be added later to the models
	name:String,
	price:Number,
	image:String
});

module.exports=mongoose.model('Product',ProductSchema);
