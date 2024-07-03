const express = require('express');
const app = express();
const PORT = 8000;

//뷰템플릿
app.set("view engine", "ejs");
app.set('views', './views') //뷰파일들의 위치 알려줌(명시적경로)
//뷰 파일을 views폴더에 넣을때는 생략이 가능함.

/*
//views폴더 외 지정하고 싶을때 
//app.set("views", "./template") //생략이 불가
// const path = require('path');
// app.set('views', path.join(__dirname, 'template'));
*/

app.get("/", (req, res) => {
    res.send("Hello Express");
});

app.get('/test', (req, res) => {
    res.render('test', {name:'홍길동'}); //뷰템플릿, 데이터 보냄
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});