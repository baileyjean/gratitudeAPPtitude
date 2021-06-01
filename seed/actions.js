const db = require('../db')
const { Emotion, Action } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const happy = await Emotion.find({ name: 'Happy' })
  const sad = await Emotion.find({ name: 'Sad' })
  const anger = await Emotion.find({ name: 'Anger' })
  const disgust = await Emotion.find({ name: 'Disgust' })

  const actions = [
    {
      "name": "gratitudeList",
      "description": "Make a gratitude list to express what you are happy about!",
      "emotionRef": happy[0]._id
    },
    {
      "name": "readingList",
      "description": "Here is your reading list about happiness.",
      "emotionRef": happy[0]._id
    },
    {
      "name": "actionList",
      "description": "Here are some things you can do to continue being happy.",
      "emotionRef": happy[0]._id
    },
    {
      "name": "gratitudeList",
      "description": "Make a gratitude list so you can stop being sad.",
      "emotionRef": sad[0]._id
    },
    {
      "name": "readingList",
      "description": "Here is your reading list about sadness.",
      "emotionRef": sad[0]._id
    },
    {
      "name": "actionList",
      "description": "Here are some things you can do to stop being sad.",
      "emotionRef": sad[0]._id
    },
    {
      "name": "gratitudeList",
      "description": "Make a gratitude list so you can stop being angry.",
      "emotionRef": anger[0]._id
    },
    {
      "name": "readingList",
      "description": "Here is your reading list about anger.",
      "emotionRef": anger[0]._id
    },
    {
      "name": "actionList",
      "description": "Here are some things you can do to stop being angry.",
      "emotionRef": anger[0]._id
    },
    {
      "name": "gratitudeList",
      "description": "Make a gratitude list so you can stop being disgusted.",
      "emotionRef": disgust[0]._id
    },
    {
      "name": "readingList",
      "description": "Here is your reading list about disgust.",
      "emotionRef": disgust[0]._id
    },
    {
      "name": "actionList",
      "description": "Here are some thing you can do to stop being disgusted.",
      "emotionRef": disgust[0]._id
    }
  ]

  await Action.insertMany(actions)
  console.log('Created actions with emotion references!')
}
const run = async () => {
  await main()
  db.close()
}

run()