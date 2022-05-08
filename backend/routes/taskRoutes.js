const express = require("express");
const router = express.Router();
const { getTask, addTask } = require("../controllers/taskController");

//  Request
router.route("/").get(getTask).post(addTask);
// router.route("/:id").put(updateTodo).delete(deleteTodo);

module.exports = router;
