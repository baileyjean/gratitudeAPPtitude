const mongoose = require('mongoose')
const EmotionSchema = require('./emotion')
const ActionSchema = require('./action')
const CommentSchema = require('./comment')

const Emotion = mongoose.model('emotions', EmotionSchema)
const Action = mongoose.model('actions', ActionSchema)
const Comment = mongoose.model('comments', CommentSchema)


module.exports = {
  Emotion,
  Action, 
  Comment
}