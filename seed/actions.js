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
      "description": "Happiness is a wonderful thing, and we are so glad you feel good today. Here is a great article to add to your bookmarks, to help you sustain that positivity: https://www.verywellmind.com/how-gratitude-makes-you-happier-5114446",
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
      "description": "One of the best ways to combat negative emotions is through understanding and learning about why you're upset. Try reading: https://www.psychologytoday.com/us/blog/daring-love/202101/accepting-our-anger-during-the-pandemic ",
      "emotionRef": anger[0]._id
    },
    {
      "name": "actionList",
      "description": "HALT: Hungry, Angry, Lonely, Tired. If you feel any of these in relation to your anger, take a moment to yourself; breathe; and try to address one of the root causes in the HALT checklist.",
      "emotionRef": anger[0]._id
    },
    {
      "name": "gratitudeList",
      "description": "Make a gratitude list so you can stop being disgusted.",
      "emotionRef": disgust[0]._id
    },
    {
      "name": "readingList",
      "description": "Many negative emotions can be simplified down to disgust. Try reading: https://www.verywellmind.com/embrace-negative-emotions-4158317",
      "emotionRef": disgust[0]._id
    },
    {
      "name": "actionList",
      "description": "Try positive envisioning.",
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