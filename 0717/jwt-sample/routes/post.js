const express = require('express');
const { createPost, createComment, all, getPost } = require('../controller/post');
const router = express.Router();


//글생성 /api/post/create
router.post('/create', createPost)
//댓글생성 /api/post/comment
router.post('/comment', createComment)
//전체 조회 /api/post/all
router.post('/all', all);
//하나 조회 /api/post/getpost/:id
router.get('/getpost/:id', getPost);
//수정
//삭제

//다대다
module.exports = router;