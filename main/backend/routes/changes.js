const express = require("express");
const router = express.Router();

let changes = []; // In-memory storage (replace with a database in production)

// Get all changes
router.get("/", (req, res) => {
res.json(changes);
});

// Add a new change
router.post("/", (req, res) => {
const { title, description } = req.body;
const newChange = { id: changes.length + 1, title, description, status: "Pending" };
changes.push(newChange);
res.status(201).json(newChange);
});

// Update a change's status
router.put("/:id", (req, res) => {
const { id } = req.params;
const { status } = req.body;
const change = changes.find((c) => c.id === parseInt(id));

if (!change) return res.status(404).json({ error: "Change not found" });

change.status = status;
res.json(change);
});

module.exports = router;
