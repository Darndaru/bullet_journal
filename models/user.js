const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: [true, 'The todo text field is required'],
  },
  password: {
    type: String,
    required: [true, 'The type field is required'],
  },
});
// Create model for task
const User = mongoose.model('todo', UserSchema);
module.exports = User;