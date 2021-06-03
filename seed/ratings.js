const db = require('../db')
const { Rating } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const ratings = [
    {
      rating: 5
  ]

  await Rating.insertMany(ratings)
  console.log('Created rating!')
}
const run = async () => {
  await main()
  db.close()
}

run()