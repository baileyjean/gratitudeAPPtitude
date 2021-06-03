const { Schema } = require('mongoose')

const Comment = new Schema(
  {
    comment: {type: String}
  },
  { timestamps: true }
)

module.exports = Comment;