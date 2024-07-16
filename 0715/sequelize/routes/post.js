const express = require('express');
const { all, write, one, updateFunc, deleteFunc } = require('../controller/post');
const router = express.Router();

//get /api/post/all 전체글 조회
router.get('/all', all);
//post /api/post/write 글 하나 생성
router.post('/write', write);
//get /api/post/:id  -> get타입 중에서 가장 아래부분에 와야 함.
router.get('/:id', one);
//patch /api/post/update 글 하나 수정
router.patch('/update', updateFunc);
//delete /api/post/delete 글 하나 삭제
router.delete('/delete', deleteFunc);

module.exports = router;