// Post Models and Schema

import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },

  content: {
    type: String,
    required: true,
  },

  author: {
    type: String,
    required: true,
  },

}, {
  timestamps: true,
});

export default mongoose.models.Post || mongoose.model("Post", postSchema);