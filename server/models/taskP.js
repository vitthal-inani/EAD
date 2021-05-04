const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskPSchema = new Schema({
  name: {
    type: String,
    default: 'Task'
  },
  description: [{
    type: String
  }],
  creatorId: {
      type: String,
      required: true,
  },
  userId: [{
    type: String,
    required: true
  }],
  groupId: {
    type: String,
    required: true
  },
  deadline: [{
    type: Date,
    equired: true
  }],
  estTime: [{
    type: Number,
    required: true
  }],
  completed: [{
    type: Boolean,
    default: false
  }]
});

const TaskP = mongoose.model('taskPs', TaskPSchema);

module.exports = TaskP;