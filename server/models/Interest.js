const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const interestSchema = new Schema({
  apple: {
    type: String,
    required: true,
  },
  season: {
    type: String,
    required: true,
  },
  bread: {
    type: String,
    required: true,
  },
  house: {
    type: String,
    required: true,
  },
  movie: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Interest = mongoose.model("Interest", interestSchema);
module.exports = Interest;
