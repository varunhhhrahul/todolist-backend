const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    task: {
      type: String,
      required: [true, 'Task is required!'],
    },
    description: {
      type: String,
      required: [true, 'Description of the task is required!'],
    },
    isEvent: {
      type: Boolean,
      default: false,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    isImportant: {
      type: Boolean,
      default: false,
    },
    dateOfCompletion: {
      type: Date,
    },
    dateOfEvent: {
      type: Date,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('todo', TodoSchema);
