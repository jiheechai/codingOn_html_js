const express = require('express');
const app = express();
const PORT = 8000;

//뷰엔진
app.set("view engine", "ejs");
app.set("views", "./views");
//미들웨어 body-parser. post방식 사용할때 필요.
app.use(express.urlencoded({extended: true}))

//라우터
app.get('/', (req, res) => {
    res.render('form');
});

//get방식일때 form 정보 받기
app.get('/getForm', (req, res) => {
    console.log(req.query);
    res.render('result', { title : 'GET 요청 결과', userInfo : req.query});
});
//post방식일때 form 정보 받기
app.post('/postForm', (req, res) => {
    console.log(req.body);
    res.render('result1', { title : 'POST 요청 결과', userInfo : req.body});
});

//서버 실행
app.listen(PORT, ()=> {
    console.log(`http://localhost:${PORT}`);
});
