const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController')

router.get('/', taskController.getAll);
router.get('/:id', taskController.getOne)
router.post('/', taskController.create);
router.delete('/:id', taskController.delete);
module.exports = router;