const express = require('express');
const app = express();
const PORT = 8000;

//미들웨어. 뷰엔진. 
app.set("view engine", "ejs");
app.set("views", "./views");
//미들웨어 body-parser. post방식 사용할때 필요.
// extended: true :qs모듈사용 body 데이터를 해석
// extended: false :내장된 querystring 모듈 사용
app.use(express.urlencoded({extended: true}));

//라우터
app.get('/', (req, res) => {
    res.render('form');
});

//form 페이지 열기
app.get('/form', (req, res) => {
    res.render('index');
});

//get 방식 일때. form 정보 받기
app.get('/getForm', (req, res) => {
    console.log(req.query);
    res.render('result', { title: 'GET요청 결과', userInfo : req.query });
});

//post방식일때
app.post('/postForm', (req, res) => {
    console.log(req.body);
    res.render('result', {title: 'POST요청 결과', userInfo: req.body});
});

//서버실행
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});