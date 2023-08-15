const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for task
const TodoSchema = new Schema({
  action: {
    type: String,
    required: [true, 'The todo text field is required'],
  },
  action_type: {
    type: String,
    required: [true, 'The type field is required'],
  },
  date: {
    type: Date,
    required: [true, 'The date field is required'],
  },
});

const Todo = mongoose.models.Todo || mongoose.model('Todo', TodoSchema);
module.exports = Todo;