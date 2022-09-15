import mongoose from "mongoose";

const Schema = mongoose.Schema;

const listSchema = new Schema(
  {
    ingredient: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    unit: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const ListItem = mongoose.model("ListItem", listSchema);
export default ListItem;

/*
Template form the document: https://mongoosejs.com/docs/guide.html

import mongoose from 'mongoose';
const { Schema } = mongoose;

const blogSchema = new Schema({
  title:  String, // String is shorthand for {type: String}
  author: String,
  body:   String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  }
});

const Blog = mongoose.model('Blog', blogSchema);
*/
