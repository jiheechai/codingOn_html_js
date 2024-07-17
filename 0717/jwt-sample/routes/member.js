const express = require('express');
const { signup, login, find, update, deleteFunc } = require('../controller/member');
const router = express.Router();

// /api/member/signup
router.post('/signup', signup);
// /api/member/login
router.post('/login', login);
// /api/member/info/
router.get('/info/:id', find);
router.patch('/update', update);
router.delete('/delete', deleteFunc);

module.exports = router;