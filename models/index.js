const mongoose = require('mongoose')
const EmotionSchema = require('emotion')
const ActionSchema = require('action')

const Emotion = mongoose.model('emotions', EmotionSchema)
const Action = mongoose.model('actions', ActionSchema)

module.exports = {
  Emotion,
  Action
}