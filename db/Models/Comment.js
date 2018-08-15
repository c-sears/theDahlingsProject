const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  comment: { type: String, required: true },
  author: [{
    type: Schema.Types.ObjectId,
    ref: 'User'}],
  gistId: {
    type: Schema.Types.ObjectId,
    ref: 'Gist'
  },
  date: { type: Date, default: Date.now }
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;