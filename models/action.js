const mongoose = require('mongoose')
const emotion = require('./emotion')
const Schema = mongoose.Schema

const Action = new Schema(
  {
    name: {type: String, isDone: Boolean, required: true},
    description: {type: String, required: true},
    emotionRef: {type: Schema.Types.ObjectId, ref: emotion, required: true}
  },
  { timestamps: true }
)

module.exports = mongoose.model('actions', Action)