const asyncHandler = require("express-async-handler");

const Task = require("../models/taskModel");

const getTask = asyncHandler(async (req, res) => {
  const tasks = await Task.find();
  res.status(200).json(tasks);
});

const addTask = asyncHandler(async (req, res) => {
  const task = await Task.create({
    taskname: req.body.taskname,
    ticketno: req.body.ticketno,
    deliverable: req.body.deliverable,
  });
  res.status(200).json(task);
});

module.exports = {
  getTask,
  addTask,
};
