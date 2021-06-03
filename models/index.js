const mongoose = require('mongoose')
const EmotionSchema = require('./emotion')
const ActionSchema = require('./action')
const RatingSchema = require('./rating')

const Emotion = mongoose.model('emotions', EmotionSchema)
const Action = mongoose.model('actions', ActionSchema)
const Rating = mongoose.model('ratings', RatingSchema)


module.exports = {
  Emotion,
  Action, 
  Rating
}