const Todo = require("../models/todo");

class TaskController {
  async create(req, res, next) {
    if (req.body.action) {
      Todo.create(req.body)
        .then((data) => res.json(data))
        .catch(next);
    } else {
      res.json({
        error: 'The input field is empty',
      });
    }
  }

  async getOne(req, res, next) {
    Todo.findOne({_id: req.params.id})
      .then((data) => res.json(data))
      .catch(next);
  }

  async getAll(req, res, next) {
    Todo.find({}, 'action')
      .then((data) => res.json(data))
      .catch(next);
  }

  async delete(req, res, next) {
    Todo.findOneAndDelete({_id: req.params.id})
      .then((data) => res.json(data))
      .catch(next);
  }
}

module.exports = new TaskController()