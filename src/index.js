const express = require('express');
const handlebars = require('express-handlebars')
const path = require('path');
const { getAllMovies, getMovieById } = require('./services/movieService');
const { configDatabase } = require('./config/database');
const { router } = require('./config/routes');

const app = express();
const port = 5000;

async function start() {
    await configDatabase();
    app.engine('hbs', handlebars.engine({
        extname: 'hbs'
    }));
    app.set('view engine', 'hbs');
    app.set('views', path.join(__dirname, 'views'));
    
    app.use(express.static('src/static'))
    
    app.use(router);
    // app.get('/', async (req, res) => {
    //     const movies = await getAllMovies();
    //     res.render('home', { movies });
    // })
    // app.get('/create/movie', (req, res) => {
    //     res.render('create');
    // })
    // app.get('/create/cast', (req, res) => {
    //     res.render('cast-create');
    // })
    // app.get('/search', (req, res) => {
    //     res.render('search');
    // })
    // app.get('/about', (req, res) => {
    //     res.render('about');
    // })
    // app.get('/details/:id', async (req, res) => {
    //     const id = req.params.id;
    //     const movie = await getMovieById(id);
    //     movie.starRating = '&#x2605;'.repeat(movie.rating);
    //     res.render('details', { movie });
    // })
    // app.get('*', (req, res) => {
    //     res.render('404', { layout: false });
    // })
    app.listen(port, () => console.log(`Server is listening on port ${port}...`));
};
start();
