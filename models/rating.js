const { Schema } = require('mongoose')

const Rating = new Schema(
  {
    rating: {type: Number},
    ratingNum: {type: String}
  },
  { timestamps: true }
)

module.exports = Rating;