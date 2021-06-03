const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res) => res.send('This is the root of GratitudeAPPtitude!'))

router.get('/actions', controllers.getAllActions)

router.post('/action/:emotionID', controllers.createAction)

router.delete('/actions/:id', controllers.deleteAction)

router.put('/actions/:id', controllers.updateAction)

router.get('/actions/:id', controllers.getActionById)

router.get('/action/:emotionRef', controllers.getActionByEmotionRef)

router.get('/comments', controllers.getAllComments)

router.delete('/comment/:id', controllers.deleteComment)

router.post('/comment', controllers.submitComment)

router.get('/emotions/:id', controllers.getEmotionById)

router.get('/emotions', controllers.getAllEmotions)

module.exports = router;
