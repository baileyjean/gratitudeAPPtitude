const { Schema } = require('mongoose')

const Rating = new Schema(
  {
    name: {type: Number}
  },
  { timestamps: true }
)

module.exports = Rating;