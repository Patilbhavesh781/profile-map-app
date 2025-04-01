const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
  address: String,
  latitude: Number,
  longitude: Number,
});

module.exports = mongoose.model("Profile", ProfileSchema);
