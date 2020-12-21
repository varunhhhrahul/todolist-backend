const express = require('express');
const {
  getTodos,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
  completeTodo,
  pendingTodo,
  importantTodo,
} = require('../controllers/todo');

const router = express.Router();

const { protect } = require('../middleware/auth');

router.get('/', protect, getTodos);
router.post('/', protect, createTodo);
router.get('/:id', protect, getTodo);
router.put('/:id', protect, updateTodo);
router.delete('/:id', protect, deleteTodo);

module.exports = router;
