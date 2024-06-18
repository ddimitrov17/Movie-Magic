const { Router } = require('express');
const { notFound } = require('../controllers/404');
const { about } = require('../controllers/about');
const { home, details, search, editGet, editPost, deleteGet, deletePost } = require('../controllers/catalog');
const { createGet, createPost } = require('../controllers/createMovie');
const { createGet: createCastGet, createPost: createCastPost } = require('../controllers/createCast');
const { attachGet, attachPost } = require('../controllers/attach');
const { registerGet, loginGet, registerPost, loginPost, logout } = require('../controllers/user');
const { isuserLogged, isUserNotLogged } = require('../middleware/guards');



const router = Router();

router.get('/', home);
router.get('/about', about);
router.get('/details/:id', details);
router.get('/create/movie',isUserNotLogged(), createGet);
router.get('/create/cast',isUserNotLogged(),  createCastGet);
router.get('/search', search);
router.get('/attach/:id',isUserNotLogged(),  attachGet);
router.get('/register',isuserLogged(),  registerGet);
router.get('/login',isuserLogged(),  loginGet);
router.get('/logout',isUserNotLogged(),  logout);
router.get('/edit/:id',editGet);
router.get('/delete/:id',deleteGet);

router.post('/create/movie',isUserNotLogged(),  createPost);
router.post('/create/cast',isUserNotLogged(),  createCastPost);
router.post('/attach/:id',isUserNotLogged(),  attachPost);
router.post('/register',isuserLogged(), registerPost);
router.post('/login',isuserLogged(),  loginPost);
router.post('/edit/:id',editPost);
router.post('/delete/:id',deletePost);

router.get('*', notFound);

module.exports = { router };