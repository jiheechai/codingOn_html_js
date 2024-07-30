const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const app = express();
const db = require('./models');
const PORT = 8000;

app.set('view engine', 'ejs');
app.use(express.json());
const server = http.createServer(app);
const io = socketIo(server);

//라우터
//페이지 라우터
const page = require('./routes/page');
app.use('/', page);

//api 라우터
const clientRouter = require('./routes/client');
app.use('/api/client', clientRouter);

io.on('connection', (socket) => {
    console.log(`socket conenction ${socket.id}`);
    socket.on('create', (arg) => {
        console.log('create: ', arg);
    });
    socket.on('update', (arg) => {
        // console.log('update: ', arg);
        socket.emit('updateResult', arg);
    })

    socket.on('newone', (arg) => {
        console.log('newone: ', arg);
        io.emit('newoneResult', arg);
    })
})

//404
app.use('*', (req, res) => {
    res.status(404).send('페이지를 찾을 수 없습니다.');
});

db.sequelize.sync({ force: false }).then(() => {
    server.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    });
});