const main = (req, res) => {
    res.render('page');
};

const login = (req, res) => {
    res.render('login');
};

const profile = (req, res) => {
    res.render('profile');
}

const signup = (req, res) => {
    res.render('signup');
}

module.exports = { main, login, profile, signup };