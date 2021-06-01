const { Schema } = require('mongoose')

const Action = new Schema(
  {
    name: {type: String, isDone: Boolean, required: true},
    description: {type: String, required: true},
    emotionRef: {type: Schema.Types.ObjectId, ref: 'emotion_id', required: true}
  },
  { timestamps: true }
)

module.exports = Action;