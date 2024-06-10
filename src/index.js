const express = require('express');
const handlebars = require('express-handlebars')
const path = require('path');
const { getAllMovies, getMovieById } = require('./services/movieService');
const { configDatabase } = require('./config/database');
const { router } = require('./config/routes');
const { configExpress } = require('./config/express');
const { configHbs } = require('./config/hbs');

const app = express();
const port = 5000;

async function start() {
    await configDatabase();
    configHbs(app);
    configExpress(app);
    app.use(router);
    
    app.listen(port, () => console.log(`Server is listening on port ${port}...`));
};
start();
