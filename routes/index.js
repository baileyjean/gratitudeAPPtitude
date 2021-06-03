const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res) => res.send('This is the root of GratitudeAPPtitude!'))

router.get('/actions', controllers.getAllActions)

router.get('/actions/:id', controllers.getActionById)

router.post('/action/:emotionID', controllers.createAction)

router.delete('/actions/:id', controllers.deleteAction)

router.put('/actions/:id', controllers.updateAction)

router.get('/ratings', controllers.getAllRatings)

router.post('/rating/:id', controllers.submitRating)

router.delete('/ratings/:id', controllers.deleteRating)

module.exports = router;
