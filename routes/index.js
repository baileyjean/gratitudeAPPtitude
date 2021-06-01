const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res) => res.send('This is the root of GratitudeAPPtitude!'))

router.get('/actions', controllers.getAllActions)

router.post('/action/:emotionID', controllers.createAction)

router.get('/actions/:id', controllers.getActionById)

router.put('/actions/:id', controllers.updateAction)

router.delete('/actions/:id', controllers.deleteAction)

module.exports = router;
