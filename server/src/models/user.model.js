const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    age: Number
  },
  { timestamps: true },
  { collection: 'users' }
);

const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;
