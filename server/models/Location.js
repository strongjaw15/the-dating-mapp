const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const locationSchema = new Schema({
  type: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  style: {
    type: String,
  },
  website: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  latPosition: {
    type: Number,
    required: true,
  },
  lngPosition: {
    type: Number,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

const Location = mongoose.model("Location", locationSchema);
module.exports = Location;
