const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
  title: String,
  date: String,
  availableSeats: Number,
  price: Number
});

module.exports = mongoose.model("Event", eventSchema);
