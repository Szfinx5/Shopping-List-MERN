import ListItem from "../models/listItemSchema.js";
import mongoose from "mongoose";

// GET the full list
export async function getList(req, res) {
  const list = await ListItem.find({}).sort({ createdAt: -1 });
  res.status(200).json(list);
}

// GET one list item
export async function getItemById(req, res) {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Couldn't find the item" });
  }

  const item = await ListItem.findById(id);
  if (!item) {
    return res.status(404).json({ error: "Couldn't find the item" });
  }
  res.status(200).json(item);
}

// POST a new item
export async function createItem(req, res) {
  const { ingredient, amount, unit } = req.body;

  let completedBoxes = [];

  if (ingredient) {
    completedBoxes.push("ingredient");
  }

  if (amount) {
    completedBoxes.push("amount");
  }

  if (amount) {
    completedBoxes.push("amount");
  }

  if (completedBoxes.length < 3) {
    return res.status(400).json({ error: "Please complete all the fields" });
  }
  try {
    console.log(completedBoxes);
    const listItem = await ListItem.create({
      ingredient,
      amount,
      unit,
    });
    res.status(200).json(listItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// DELETE one list item
export async function deleteItemById(req, res) {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Couldn't find the item" });
  }

  const item = await ListItem.findOneAndDelete({ _id: id });
  if (!item) {
    return res.status(404).json({ error: "Couldn't find the item" });
  }
  res.status(200).json(item);
}

// UPDATE one list item
export async function updateItemById(req, res) {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Couldn't find the item" });
  }

  const item = await ListItem.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!item) {
    return res.status(404).json({ error: "Couldn't find the item" });
  }
  res.status(200).json(item);
}
