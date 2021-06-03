const db = require('../db')
const { Comment } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const comments = [
    { comment: 'Test comment' },
    { comment: 'Another test comment' },
    { comment: 'Deletable test comment' }
  ]

  await Comment.insertMany(comments)
  console.log('Created comments!')
}
const run = async () => {
  await main()
  db.close()
}

run()