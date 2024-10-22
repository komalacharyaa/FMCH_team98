const express = require('express');

const controllers = require('./controller');

const router = express.Router();

router.get('/', controllers.getMain);

router.get('/login', controllers.getLogin);
router.post('/login', controllers.postLogin);

router.get('/worker', controllers.getWorker);

router.post('/addSession', controllers.postAddSession);

router.get('/firstTrimester', controllers.getFirstTrimester);

router.post('/postProblem1', controllers.postProblem1);

router.get('/getAdviceMedicine', controllers.getAdviceMedicine);


module.exports = router;