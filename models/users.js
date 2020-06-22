const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    boards: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Board'
    }],
    cards: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Card'
    }],
    comments: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment'
    }],
  },
  {timestamps: true}
)

module.exports = User = mongoose.model('User', UserSchema);