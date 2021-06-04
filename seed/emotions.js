const db = require('../db')
const { Emotion } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const emotions = [
    {
      name: "Happy",
      description: "Related emotions: Calm | Cheerful | Content | Energetic | Excited | Playful | Silly"
    }, 
    {
      name: "Sad",
      description: "Related emotions: Depressed | Distressed | Gloomy | Heartbroken | Melancholy | Pessimistic | Somber"
    },
    {
      name: "Anger",
      description: "Related emotions: Annoyed | Animosity | Exasperated | Impatient | Passionate | Peeved | Resentful"
    },
    {
      name: "Disgust",
      description: "Related emotions: Abhorrence | Antipathy | Contempt | Detest | Distain | Loath | Revulsion"
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