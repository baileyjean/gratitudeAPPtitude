const { Schema } = require('mongoose')

const Action = new Schema(
  {
    name: {type: String, required: true},
    description: {type: String, required: true},
    readingLink: {type: String, required: false},
    emotionRef: {type: Schema.Types.ObjectId, ref: "emotions", required: true}
  },
  { timestamps: true }
)

module.exports = Action;