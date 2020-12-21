const asyncHandler = require('../middleware/async');
const errorHandler = require('../middleware/error');
const Todo = require('../models/Todo');

// @desc      get todos
// @route     GET /api/v1/todos
// @access    Private
exports.getTodos = asyncHandler(async (req, res, next) => {
  const todos = await Todo.find({ user: req.user._id });

  res.status(200).json({
    success: true,
    data: todos,
  });
});

// @desc      get todo
// @route     GET /api/v1/todos/:id
// @access    Private
exports.getTodo = asyncHandler(async (req, res, next) => {
  const todo = await Todo.findById(req.params.id);

  res.status(200).json({
    success: true,
    data: todo,
  });
});

// @desc      create todo
// @route     POST /api/v1/todos
// @access    Private
exports.createTodo = asyncHandler(async (req, res, next) => {
  const {
    task,
    description,
    isEvent,
    dateOfCompletion,
    dateOfEvent,
    isCompleted,
    isImportant,
  } = req.body;

  const todo = await Todo.create({
    user: req.user._id,
    task,
    description,
    isEvent,
    dateOfCompletion,
    dateOfEvent,
    isCompleted,
    isImportant,
  });

  res.status(200).json({
    success: true,
    data: todo,
  });
});

// @desc      update todo
// @route     PUT /api/v1/todos/:id
// @access    Private

exports.updateTodo = asyncHandler(async (req, res, next) => {
  const {
    task,
    description,
    isEvent,
    dateOfCompletion,
    dateOfEvent,
    isCompleted,
    isImportant,
  } = req.body;

  const todo = await Todo.findByIdAndUpdate(
    req.params.id,
    {
      task,
      description,
      isEvent,
      dateOfCompletion,
      dateOfEvent,
      isCompleted,
      isImportant,
    },
    { new: true, runValidators: true }
  );

  res.status(200).json({
    success: true,
    data: todo,
  });
});

// @desc      delete todo
// @route     DELETE /api/v1/todos/:id
// @access    Private

exports.deleteTodo = asyncHandler(async (req, res, next) => {
  const todo = await Todo.findByIdAndRemove(req.params.id);
  res.status(200).json({
    success: true,
    data: todo,
  });
});

// // @desc      complete todo
// // @route     PUT /api/v1/todos/:id/complete
// // @access    Private

// exports.completeTodo = asyncHandler(async (req, res, next) => {
//   const todo = await Todo.findByIdAndUpdate(
//     req.params.id,
//     {
//       isCompleted: true,
//       dateOfCompletion: Date.now(),
//     },
//     { new: true, runValidators: true }
//   );
//   res.status(200).json({
//     success: true,
//     data: todo,
//   });
// });

// // @desc      pending todo
// // @route     PUT /api/v1/todos/:id/pending
// // @access    Private

// exports.pendingTodo = asyncHandler(async (req, res, next) => {
//   const todo = await Todo.findByIdAndUpdate(
//     req.params.id,
//     {
//       isCompleted: false,
//       dateOfCompletion: null,
//     },
//     { new: true, runValidators: true }
//   );
//   res.status(200).json({
//     success: true,
//     data: todo,
//   });
// });

// // @desc      important todo
// // @route     PUT /api/v1/todos/:id/important
// // @access    Private

// exports.importantTodo = asyncHandler(async (req, res, next) => {
//   const todo = await Todo.findByIdAndUpdate(
//     req.params.id,
//     {
//       isImportant: false,
//     },
//     { new: true, runValidators: true }
//   );
//   res.status(200).json({
//     success: true,
//     data: todo,
//   });
// });
