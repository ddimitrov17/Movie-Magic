const { createToken } = require("../services/tokenService");
const { register, login } = require("../services/userService");

module.exports = {
    registerGet: (req, res) => {
        res.render('register');
    },
    registerPost: async (req, res) => {
        const { email, password, repass } = req.body;
        let errors = [];

        if (!email || !password || !repass) {
            errors.push('All fields are required!');
        };
        if (password != repass) {
            errors.push('Passwords do not match!');
        }
        if (errors.length > 0) {
            res.render('register', { errors });
            return;
        }
        const user = await register(email, password);
        const token = createToken(user);
        res.cookie('token', token, { httpOnly: true });
        res.redirect('/');
    },
    loginGet: (req, res) => {
        res.render('login');
    },
    loginPost: async (req, res) => {
        const { email, password } = req.body;
        console.log(`Logged in as ${email}`); // To delete
        let errors = [];

        if (!email || !password) {
            errors.push('All fields are required!');
        };
        if (errors.length > 0) {
            res.render('login', { errors });
            return;
        }
        const user = await login(email, password);
        const token = createToken(user);
        res.cookie('token', token, { httpOnly: true });
        res.redirect('/');
    },
    logout: async (req,res) => {
        res.clearCookie('token');
        res.redirect('/');
    }
}