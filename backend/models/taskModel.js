const mongoose = require("mongoose");

const taskSchema = mongoose.Schema(
  {
    taskname: {
      type: String,
    },
    ticketno: {
      type: String,
    },
    deliverable: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Task", taskSchema);
