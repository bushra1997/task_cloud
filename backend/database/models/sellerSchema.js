const mongoose = require("mongoose");

const sellerSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  location: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("Seller", sellerSchema);
