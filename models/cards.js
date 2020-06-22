const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CardSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    board: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Board'
    },
  },
  {timestamps: true}
)

module.exports = Card = mongoose.model('Card', CardSchema);