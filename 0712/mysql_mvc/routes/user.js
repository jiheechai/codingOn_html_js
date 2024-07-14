const express = require('express');
const controller = require('../controller/user');
const router = express.Router();

//localhost:8000/api/user
//POST /api/user/signup 회원가입
router.post('/signup', controller.userSignup);
//POST /api/user/login  로그인
router.post('/login', controller.userLogin);
// //GET /api/user/info 회원정보
router.get('/info/:id', controller.userInfo); 
// //PATCH /api/user/update 회원수정
router.patch('/update', controller.userUpdate);
// //DELETE /api/user/delete 회원삭제
router.delete('/delete', controller.userDelete);

// //GET /all 회원전체정보
router.get('/all', controller.userAll);

module.exports = router;