const express = require('express');
const controller = require('../controller/page');
const router = express.Router();

// http://localhost:8080/
router.get('/', controller.main);
router.get('/login', controller.login);
router.get('/profile/:id', controller.profile);
router.get('/signup', controller.signup);

module.exports = router;