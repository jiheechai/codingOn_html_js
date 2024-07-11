const userModel = require('../model/user')

const main = (req, res) => {
    res.render('user', { users: userModel });    
};

const register = (req, res) => {
    console.log(req.body);
    const {name, major, gender} = req.body;
    userModel.push({
        id: userModel.length + 1,
        name,
        major,
        gender,
    });
    res.json({ result: true });
};

module.exports = { main, register };