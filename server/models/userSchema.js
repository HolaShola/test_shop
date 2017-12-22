const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    maxlength: 100,
  },
  email: {
    type: String,
    required: true,
    maxlength: 100,
  },
  password: {
    type: String,
    required: true,
    maxlength: 100,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
