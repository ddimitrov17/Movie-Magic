const express = require('express');
const handlebars = require('express-handlebars')
const path = require('path');

const app = express();
const port = 5000;

app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('src/static'))

app.get('/', (req, res) => {
    res.render('home', { layout: false });
})
app.get('/create', (req, res) => {
    res.render('create', { layout: false });
})
app.get('/search', (req, res) => {
    res.render('search', { layout: false });
})
app.get('/about', (req, res) => {
    res.render('about', { layout: false });
})
app.get('/*', (req, res) => {
    res.render('404', { layout: false });
})
app.listen(port, () => console.log(`Server is listening on port ${port}...`));