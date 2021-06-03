const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res) => res.send('This is the root of GratitudeAPPtitude!'))

router.get('/actions', controllers.getAllActions)

router.get('/actions/:id', controllers.getActionById)

router.post('/action/:emotionID', controllers.createAction)

router.delete('/actions/:id', controllers.deleteAction)

router.put('/actions/:id', controllers.updateAction)

router.get('/comments', controllers.getAllComments)

router.post('/comment', controllers.submitComment)

router.delete('/comment/:id', controllers.deleteComment)

router.get('/emotions', controllers.getAllEmotions)

module.exports = router;
