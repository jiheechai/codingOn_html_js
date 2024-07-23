const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const app = express();
const PORT = 8000;

//http서버
const server = http.createServer(app);
//socket 서버
const io = socketIo(server);

app.set('view engine', 'ejs');

//라우터
app.get('/', (req, res) => {
    res.render('client');
});

//socket
io.on('connection', (socket) => {
    //연결 확인
    // console.log(socket);
    socket.on('open_message', (res) => {
        console.log(res);
    });

    socket.on('hello_message', (arg) => {
        console.log("client: ", arg.msg);
        socket.emit('msg_h', {msg : arg.msg + " : 안녕하세요!"});
    });

    socket.on('study_message', (arg) => {
        console.log("client: ", arg.msg);
        socket.emit('msg_s', {msg : arg.msg + " : 공부합시다!"});
    });

    socket.on('bye_message', (arg) => {
        console.log("client: ", arg.msg);
        socket.emit('msg_b', {msg : arg.msg + " : 안녕히가세요!"});
    });
})

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});