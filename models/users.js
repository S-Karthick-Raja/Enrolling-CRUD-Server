const mongoose = require('mongoose');

//Schema
const UserSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;