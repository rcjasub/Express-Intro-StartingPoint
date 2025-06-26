const express = require("express");
const router = express.Router();
const { Task } = require("../dummy-database");

router.get("/", (req, res) => {
 const response = Task.findByPk(1);
 res.send(response);
});

// GET all tasks
router.get("/", (req, res) => {
  // Replace this with your code!
   res.send(Task.findAll());
});




const app = express

// GET a single task by id

// Patch a task by id

router.get("/", (req, res) => {
 res.send(Task.update(2, Task));
});


// Delete a task by id

// Create a new task

module.exports = router;
