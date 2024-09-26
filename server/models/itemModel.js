import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  name: {type : String, required : true},
  description: String,
  price: Number,
  coverImage: String, // Path to the cover image
});

const Item = mongoose.model('Item', itemSchema);
export default Item;