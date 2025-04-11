import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3 },
  category: { type: String, required: true },
  price: { type: Number, required: true, min: 1 },
  inStock: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
});

const Item = mongoose.model("Item", itemSchema);
export default Item;
