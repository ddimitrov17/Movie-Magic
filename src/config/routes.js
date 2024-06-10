const { Router } = require('express');
const { notFound } = require('../controllers/404');
const { about } = require('../controllers/about');
const { home, details, search } = require('../controllers/catalog');
const { createGet, createPost } = require('../controllers/createMovie');
const { createGet: createCastGet , createPost: createCastPost} = require('../controllers/createCast');



const router = Router();

router.get('/', home);
router.get('/about', about);
router.get('/details/:id', details);
router.get('/create/movie', createGet);
router.get('/create/cast', createCastGet);
router.get('/search', search);
router.post('/create/movie', createPost);
router.post('/create/cast', createCastPost);

router.get('*', notFound);

module.exports = { router };