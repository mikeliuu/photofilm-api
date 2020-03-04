const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min:6,
  },
  email: {
    type: String,
    required: true,
    min:6,
  },
  password: {
    type: String,
    required: true,
    min:6,
  },
  role: {
    type: String,
    required: true,
    default: 'user'
  }
},
{
  versionKey: false,
  
});

const User = mongoose.model('User', UserSchema);

module.exports = User;