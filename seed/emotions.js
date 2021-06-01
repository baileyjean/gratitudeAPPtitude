const db = require('../db')
const { Emotion } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const emotions = [
    {
      name: "Happy",
      description: "This is happiness"
    }, 
    {
      name: "Sad",
      description: "This is sadness"
    },
    {
      name: "Anger",
      description: "This is anger"
    },
    {
      name: "Disgust",
      description: "This is disgust"
    }
  ]

  await Emotion.insertMany(emotions)
  console.log('Created emotions!')
}
const run = async () => {
  await main()
  db.close()
}

run()