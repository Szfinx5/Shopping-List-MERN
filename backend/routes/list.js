import express from "express";
import ListItem from "../models/listItemModel.js";

const router = express.Router();

// GET the full list
router.get("/", (req, res) => {
  res.json({ message: "Welcome to the list GET everything route" });
});

// GET one list item
router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  res.json({ message: `Welcome to the list GET id:${id} route` });
});

// POST a new item
router.post("/", async (req, res) => {
  const { ingredient, amount, unit } = req.body;

  try {
    const listItem = await ListItem.create({
      ingredient,
      amount,
      unit,
    });
    res.status(200).json(listItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

  // res.json({ message: `Welcome to the list POST route` });
});

// DELETE one list item
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  res.json({ message: `Welcome to the list DELETE id:${id} route` });
});

// UPDATE one list item
router.patch("/:id", (req, res) => {
  const id = Number(req.params.id);
  res.json({ message: `Welcome to the list UPDATE id:${id} route` });
});

export default router;
