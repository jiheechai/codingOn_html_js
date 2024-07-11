const commentModel = require('../model/post');

exports.main = (req, res) => {
    res.render('index');
}

exports.get = (req, res) => {
    res.render('get');
}

exports.post = (req, res) => {
    res.render('post');
}

exports.resultGet = (req, res) => {
    console.log('요청값', req.query);
    // const abc = {
    //     response: req.query,
    // };
    res.json({ response: req.query });
}

exports.resultPost = (req, res) => {
    console.log('요청값', req.body);
    const { id: reqId, pw: reqPw } = req.body;
    if (commentModel.id === reqId && commentModel.pw === reqPw) {
        res.json({ result: true, userId: reqId });
    } else {
        res.json({ result: false, userId: null });
    }
}