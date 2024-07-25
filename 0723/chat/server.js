const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
const server = http.createServer(app);
const io = socketIo(server);

//라우터
app.get('/', (req, res) => {
    res.render('client');
});

const roomList = [];
//io : 서버 전체
io.on('connection', (socket) => {
    //socket 변수는 접속한 브라우저들(구글탭).
    //방목록 보여줌. 서버에 접속한 사람이 기존에 만들어져있던 방을 볼 수 있도록 함.
    io.emit('roomList', roomList);
    //웹브라우저가 접속이 되면 고유한 id값이 생성됨. socket.id
    console.log(socket.id);

    socket.on('create', (arg) => {
        //방만들기 : join(방이름) : 없으면 생성, 있으면 입장
        socket.join(arg.roomName);
        //소켓 객체 안에 원하는 값을 할당.
        socket.roomName = arg.roomName;
        
        //나를 제외한 모든 방사람들에게 메세지 전달
        socket.to(arg.roomName).emit('notice', `${arg.userName}님이 입장하셨습니다.`);

        //채팅방 목록 갱신
        if(!roomList.includes(arg.roomName)){
            roomList.push(arg.roomName);
            //갱신됐을때 목록을 클라이언트에 전달, 전체가 봐야 함.
            //io.emit('roomList', roomList);
        }
    });

    socket.on('sendMessage', (arg) => {
        const {message, userName} = arg;
        io.to(socket.roomName).emit('newMessage', {message, userName});
    });

});

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});