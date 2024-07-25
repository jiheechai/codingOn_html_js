const main = (req, res) => {
    res.render('index');
}
const adminPage = (req, res) => {
    res.render('admin');
}
const clientAll = (req, res) => {
    res.render('client');
}
const waitingAll = (req, res) => {
    res.render('waiting');
}
module.exports = {main, adminPage, clientAll, waitingAll};