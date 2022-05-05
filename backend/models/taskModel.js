const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
  {
    taskname: {
      type: String,
      // required: [true, "Please add a text field"],
    },
    ticketno: {
      type: String,
      required: [true, "Please add a text field"],
    },
    deliverable: {
      type: String,
      required: [true, "Please add a text field"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Task", todoSchema);
