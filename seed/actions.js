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
      "name": "Make a Gratitude List",
      "description": "It is wonderful that you are feeling positive today! However, life comes in waves, and there will surely be a time in the future (hopefully the far future) when your current level of happiness is going to seem unattainable. Leave a message of hope for your future-self: write a 10-item (minimum) gratitude list... but do not stop there! Try to write until you literally cannot think of anything else. You can make this a daily practice of adding to the same list, or start a new list every day, or both! Whatever works for you. But keep it somewhere safe so you have a message of hope to your future-self.",
      "emotionRef": happy[0]._id
    },
    {
      "name": "Knowledge is Power - Reading About Your Emotions Can Help You Sustain Your Positive State of Mind",
      "description": "Happiness is a wonderful thing, and I am so glad you feel good today. Here is a great article to add to your bookmarks, to help you sustain that positivity:",
      "readingLink": "https://www.verywellmind.com/how-gratitude-makes-you-happier-5114446",
      "emotionRef": happy[0]._id
    },
    {
      "name": "Take Action!",
      "description": "I do not know what you have been doing, but keep it up! If you are not already practicing these actions, try the following to sustain your current level of contentment: exercise regularly (even if you just go for a walk around the block); meditate for at least five minutes every day; drink plenty of water; express love and gratitude often - internally and externally; accept that everyone is having their own journey through life; find like-minded individuals who mirror the values and qualities you desire; be mindful and present; be kind to yourself; when you start to feel yourself getting down, turn your thoughts to helping another person.",
      "emotionRef": happy[0]._id
    },
    {
      "name": "Make a Gratitude List",
      "description": "Sadness is like a large blanket being draped over you; existence feels heavier somehow, and even a simple movement seems to take all of your effort. To address this, let us start small: try writing just a three-item gratitude list right now. Nothing is too small to include. Maybe try thinking back to the happiest moments of your life, and recognize that you are able to feel that level of happiness BECAUSE of the lows. Forgive yourself for feeling this way, and put yourself on your gratitude list... celebrate any successes you have had lately (even if you only managed to get out of bed today). Gratitude can be found anytime we seek it, if we truly want to get better.",
      "emotionRef": sad[0]._id
    },
    {
      "name": "Knowledge is Power - Reading About Your Emotions Can Help With Processing",
      "description": "There are SO MANY resources out there to help people understand depression and sadness, but I believe one of the most effective things to do when a person is feeling sad is to make sure that person knows they are not alone, and then to normalize what they are feeling. COVID-19 had an unexpectedly positive impact in normalizing the conversation about depression, as the world collectively experienced what so many people were living with every day even before the pandemic. I hope this article helps you feel validated and less alone. It is filled with statistics about depression, anxiety, and mental health:",
      "readingLink": "https://loudcloudhealth.com/resources/depression-statistics/",
      "emotionRef": sad[0]._id
    },
    {
      "name": "Take Action!",
      "description": "Sadness, and all its related emotions, can be absolutely debilitating. In fact, this may be the hardest of all four emotions to take action on. However, I know there are a few things you can do right now to help, and I believe in you!! First, take 10 deep breaths. Focus on each breath and try to follow it through your body as you draw it in. Allow your body to express how it feels; recognize any aches or pains, and accept them. Next, stretch your body out, however it feels most comfortable for you... you can lay down or standup. After you do this, get a glass of water and drink the whole thing. Multiple research studies have suggested that depression is linked to inflammation, so stretching your muscles and drinking water will help reduce that almost immediately. Finally, meditate: if you have never meditated before, that is okay! It can feel intimidating at first, but the primary goal of meditation is to be mindful and present. If you do not practice meditation regularly (and sometimes, even when you do), you will find it difficult to clear your mind, but this is completely normal and okay. There is NO WRONG WAY to meditate! Start off with a short goal for your meditation: five minutes. If you think you are too busy to take five minutes for meditation right now... do ten minutes instead. Everybody has time for this, and your mental and emotional health is absolutely worth that time. Use any resource you want: guided meditations on your favorite music or video app, silent meditation, body-scan meditation, self-guided meditation... again, there is no wrong way to do it. Just give it a try, be gentle with yourself, and try to make these actions a daily practice. Forgive yourself if you fall short of your goal. This is about progress, not perfection. I am proud of you.",
      "emotionRef": sad[0]._id
    },
    {
      "name": "Make a Gratitude List",
      "description": "There are a whole spectrum of emotions that boil down to anger, and some are stronger than others. When we feel angry, it blots out all other feelings, and dominates us. But we have the power in this moment, right now, to combat the tyranny of anger. Write a MINIMUM five-item gratitude list, and START that list with being grateful for your anger. Although it is a tyrannical emotion almost nobody enjoys, it indicates that we have the ability to care deeply about someone or something. Find gratitude, first, by thanking the universe and yourself for caring so much.",
      "emotionRef": anger[0]._id
    },
    {
      "name": "Knowledge is Power - Reading About Your Emotions Can Help With Processing",
      "description": "One of the best ways to combat negative emotions is through understanding and learning about why you're upset. The following article guides you through dealing with anger in a stressful situation everyone is familiar with: the pandemic....",
      "readingLink": "https://www.psychologytoday.com/us/blog/daring-love/202101/accepting-our-anger-during-the-pandemic",
      "emotionRef": anger[0]._id
    },
    {
      "name": "Take Action!",
      "description": "HALT: Hungry, Angry, Lonely, Tired. If you feel any of these in relation to your anger, take a moment to yourself; breathe; and try to address one of the root causes in the HALT checklist. Next, do 10 push-ups and 10 sit-ups... give that anger a release valve. Recognize that what you're feeling is anger, and accept it. Know that this is just a passing emotion, then try to envision a long train passing you by. This anger is just one of the cars (or maybe a few of the cars)... but the train is still moving, and eventually those cars all pass. So recognize, observe, accept, and let go. Forgive yourself for being angry, and know that it is only a moment.",
      "emotionRef": anger[0]._id
    },
    {
      "name": "Make a Gratitude List",
      "description": "Identify why you feel this way; take a deep breath; now release and write a minimum of three things you are grateful for today. Try to hyper-focus on each item; close your eyes and envision what ever it is you wrote down. Gratitude is the path back to positivity.",
      "emotionRef": disgust[0]._id
    },
    {
      "name": "Knowledge is Power - Reading About Your Emotions Can Help With Processing",
      "description": "Many negative emotions can be simplified down to disgust. Here is an article to help you embrace these negative emotions:",
      "readingLink": "https://www.verywellmind.com/embrace-negative-emotions-4158317",
      "emotionRef": disgust[0]._id
    },
    {
      "name": "Take Action!",
      "description": "Go for a walk and focus on nature... even if you can only spare 10 minutes. Try positive envisioning as you move your body. Try to find acceptance for what ever is causing this negativity in you. If a person is behind these emotions, try to remember that everybody is on their own journey, innerwardly focused... few people are intentionally harming others, but merely acting out of selfishness. Try to think of times you have been selfish or inconsiderate, and then draw parallels between your behavior and this person you are upset with. Humanize them so you can be freed of your disgust.",
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