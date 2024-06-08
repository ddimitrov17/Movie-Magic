const { Router } = require('express');
const { notFound } = require('../controllers/404');
const { about } = require('../controllers/about');


const router = Router();

router.get('/about', about);

router.get('*', notFound);

module.exports = { router };