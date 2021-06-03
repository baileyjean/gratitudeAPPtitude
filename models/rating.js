const { Schema } = require('mongoose')

const Rating = new Schema(
  {
    rating: {type: Number}
  },
  { timestamps: true }
)

module.exports = Rating;