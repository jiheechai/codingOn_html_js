//router

const express = require('express');
const controller = require('../controller/index');
const router = express.Router();

router.get('/', controller.main);
router.get('/get', controller.get);
router.get('/post', controller.post);


router.get('/resultGet', controller.resultGet);
router.post('/resultPost', controller.resultPost);

module.exports = router;