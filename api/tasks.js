const express = require("express");
const router = express.Router();
const { Task } = require("../dummy-database");

// GET all tasks
router.get("/", (req, res) => {
  const task = Task.findAll();
  res.json(task);
});

// GET a single task by id
router.get("/:id", (req, res) => {
  const task = Task.findByPk(req.params.id);
  res.status.send(task)
});

// Delete a task by id
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const task = Task.delete(id);
  res.send(task);
});

// Patch a task by id
router.patch("/:id", (req, res) => {
  const task = Task.update(parseInt(req.params.id), req.body);
  res.send(task);
});

// Create a new task
router.post("/", (req, res) => {
  const task = Task.create(req.body);
  res.send(task);
});

module.exports = router;
