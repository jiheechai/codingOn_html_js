//router

const express = require('express');
const { user } = require('../controller/user');
const router = express.Router();


//localhost:8000/user
router.get('/', user);

//localhost:8000/user/info
// router.get('/info');

module.exports = router;
