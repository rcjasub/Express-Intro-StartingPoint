const express = require("express");
const router = express.Router();
const { Task } = require("../dummy-database");


sampleTask = {
    id: 4,
    title: "Test",
    description: "Test",
    completed: false,
    userId: 2,
};

// GET all tasks
router.get("/", (req, res) => {
  const task = Task.findAll();
  res.json(task);
});


// Patch a task by id
router.patch("/", (req, res) => {
  const task = Task.update(2, sampleTask);
  res.send(task);
});



// GET a single task by id
/*
router.get("/", (req, res) => {
  const task = Task.findByPk(2);
  res.status(200).send(task)
});
*/





// Delete a task by id
router.delete("/", (req, res) => {
  const task = Task.delete(req.body);
  res.send(task);
});


// Create a new task

router.post("/", (req, res) => {

  const task = Task.create(req.body);
  res.send(task);
});

module.exports = router;
