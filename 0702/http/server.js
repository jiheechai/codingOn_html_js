const http = require('http'); //common방식
//import http from 'http' //es6방식

const server = http.createServer((req, res)=>{
    //응답
    res.writeHead(200); //성공. 마우스 우클릭 검사->Network->새로고침 하면 뜸.
    res.write('<h1>hello world</h1>');
    res.end('<p>END</p>')
});

//on() : server 객체에 이벤트를 등록
server.on("request", () => {
    console.log('요청이벤트');
});
server.on("connection", () => {
    console.log('접속이벤트');
});
//listen() : server 실행
server.listen(8000, () => {
    console.log('http://localhost:8000');
});