const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Create schema for task
const TodoSchema = new Schema({
  action: {
    type: String,
    required: [true, 'The todo text field is required'],
  },
});
// Create model for task
const Todo = mongoose.model('todo', TodoSchema);
module.exports = Todo;