const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
  },
  location: {
    type: String,
  }
});

const User = model('User', userSchema);
module.exports = User;
