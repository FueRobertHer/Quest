const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema(
  {
    body: {
      type: String,
      required: true
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    card: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Card'
    }
  }, 
  {timestamps: true}
)

module.exports = Comment = mongoose.model('Comment', CommentSchema);