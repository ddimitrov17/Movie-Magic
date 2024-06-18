function isuserLogged() {
    return function (req, res, next) {
        if (req.user) {
            res.redirect('/');
        } else {
            next();
        }
    }
}

function isUserNotLogged() {
    return function (req, res, next) {
        if (!req.user) {
            res.redirect('/login');
        } else {
            next();
        }
    }
}

module.exports = {
    isUserNotLogged,
    isuserLogged
}