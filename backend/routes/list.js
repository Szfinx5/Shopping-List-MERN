import express from "express";
import ListItem from "../models/listItemSchema.js";
import {
  createItem,
  getList,
  getItemById,
  updateItemById,
  deleteItemById,
} from "../models/models.js";

const router = express.Router();

// GET the full list
router.get("/", getList);

// GET one list item
router.get("/:id", getItemById);

// POST a new item
router.post("/", createItem);

// DELETE one list item
router.delete("/:id", deleteItemById);

// UPDATE one list item
router.patch("/:id", updateItemById);

export default router;
