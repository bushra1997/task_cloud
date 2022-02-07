const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  seller_id: { type: String, required: true },
  buyer_id: { type: String, required: true },
  date: { type: String, required: true },
  status: { type: String, required: true },
});

module.exports = mongoose.model("Appointment", appointmentSchema);
