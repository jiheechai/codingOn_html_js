const express = require('express');
const app = express();
const PORT = 8000;

//세팅
app.set('view engine', 'ejs');
app.use(express.json());

//페이지 라우터
const pageRouter = require('./routes/page');
app.use('/', pageRouter);

//라우터
const visitorRouter = require('./routes/visitor');
app.use('/api/visitor', visitorRouter);

//404
app.use('*', (req, res) => {
    res.status(404).render('404');
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
