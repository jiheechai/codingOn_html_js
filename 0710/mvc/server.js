const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');

// //임시 db -> model로 이동
// const comments = [
//     {id:1, userid:'hello', date:'2024-07-01', comment:'안녕하세요'}, 
//     {id:2, userid:'happy', date:'2024-07-02', comment:'반갑습니다.'}, 
//     {id:3, userid:'world', date:'2024-07-03', comment:'코딩온입니다.'}, 
//     {id:4, userid:'lucky', date:'2024-07-04', comment:'행복하세요.'}
// ];

// //router -> routes/index.js로 이동
// app.get('/', (req, res) => {
//     res.render('index');
// });
// app.get('/comments', (req, res) => {
//     res.render('comments', {list:comments});
// });
// //:변수값은 {변수명: "값" } 형태
// app.get('/comment/:id', (req, res)=> {
//     console.log(req.params);
//     console.log(req.params.id);
//     console.log(typeof req.params.id);
//     const page = Number(req.params.id);
//     //comments 배열의 요소에 접근.
//     res.render('comment', {data: comments[page-1]});
// });


//router
// const commentRouter = require('./routes'); 는 아래와 같음. /index는 default값.
const commentRouter = require('./routes/index');
app.use('/', commentRouter);
const userRouter = require('./routes/user');
app.use('/user', userRouter);

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});