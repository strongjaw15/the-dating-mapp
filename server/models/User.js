const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    // match: [
    //   /^([a-zA-Z0-9\\_\\-\\.]+)@([a-zA-Z]+).(.+)$/,
    //   "Email address invalid"
    // ]
  },
  zipCode: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  interestScore: {
    type: Number,
    required: true,
  },
  interests: [
    {
      type: Schema.Types.ObjectId,
      ref: "Interest",
    },
  ],
  soulMates: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  feedback: [
    {
      type: Schema.Types.ObjectId,
      ref: "Feedback",
    },
  ],
});

const User = mongoose.model("User", userSchema);
module.exports = User;
