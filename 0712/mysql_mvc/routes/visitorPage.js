const express = require('express');
const { main, pageVisitor } = require('../controller/visitorPage');
const router = express.Router();

//localhost:8000/visit
router.get('/', main);
router.get('/visitor', pageVisitor);
router.get('/visitor/:id', pageVisitor);

module.exports = router;
