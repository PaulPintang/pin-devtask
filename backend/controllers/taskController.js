const asyncHandler = require("express-async-handler");

const Task = require("../models/taskModel");

const getTask = asyncHandler(async (req, res) => {
  const tasks = await Task.find();
  res.status(200).json(todos);
});

const addTask = asyncHandler(async (req, res) => {
  const task = await Task.create({
    taskname: req.body.title,
    ticketno: req.body.status,
    deliverable: req.body.completed,
  });
});

module.exports = {
  getTask,
  addTask,
};
