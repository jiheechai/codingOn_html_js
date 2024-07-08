const express = require('express');
const app = express();
const PORT = 8000;

//body-parser 미들웨어
app.use(express.urlencoded({ extended : true }));
app.use(express.json());
//view 엔진
app.set('view engine', 'ejs');

//router
// =========페이지
app.get('/', (req, res) => {
    res.render('index');
});
/**
 * render: 뷰페이지렌더링, render(뷰페이지이름, 데이터(선택))
 * send(): 모든타입 데이터 전송(문자열, 배열, 객체, 숫자 등)
 * json() : 객체타입 데이터 전송
 */
// =========요청과 응답. 이 부분이 없거나 오타나면 404 error 발생
app.get('/ajax', (req, res) => {
    console.log('요청값', req.query);
    const {username, email} = req.query;
    //응답데이터(프론트로 보내는 데이터)
    res.send({user: `${username}님`, email: `이메일주소는 ${email}`});
});
app.post('/ajax', (req, res) => {
    console.log('요청값', req.body);
    const {username, email} = req.body;
    //응답
    res.send({ user: `${username}님`, email: `이메일주소는 ${email}`});
});

//axios get방식
app.get('/axios', (req, res) => {
    console.log('요청값: ', req.query);
    const {username, email} = req.query;
    //응답
    const data = {
        result: true,
        username, 
        email
    };
    res.json(data);
});

//axios post방식
app.post('/axios', (req, res) => {
    console.log('요청값: ', req.body);
    const {username, email} = req.body;
    //응답
    const value = {
        result : true,
        username,
        email,
    };
    res.json(value);
});

//fetch get
app.get('/fetch', (req, res) => {
    console.log('요청값', req.query);
    const {username, email} = req.query;
    //응답
    const value = {
        result : true,
        username,
        email,
    };
    res.json(value);
});
//fetch post
app.post('/fetch', (req, res) => {
    console.log('요청값: ', req.body);
    const {username, email} = req.body;
    //응답
    const value = {
        result : true,
        username,
        email,
    };
    res.json(value);
});

//use는 http전송방식을 이해하지 못함.
//같은 url로 get, post등을 만들수 있지만 use로는 접근이 불가
//위처럼 get의 /axios와 post의 /axios는 다른 통신이지만
//use는 동일한 페이지로 인식
app.use('*', (req, res) => {
    res.render('404');
});

//서버 실행
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});