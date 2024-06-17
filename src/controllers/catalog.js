const { getAllMovies, getMovieById } = require('../services/movieService');

module.exports = {
    home: async (req, res) => {
        const movies = await getAllMovies();

        res.render('home', { movies });
    },
    details: async (req, res) => {
        const id = req.params.id;
        const movie = await getMovieById(id);
        const authorId = movie.author.toString();
        const isAuthor = authorId == req.user?._id;

        if (!movie) {
            res.render('404');
            return;
        }
        movie.starRating = '&#x2605;'.repeat(movie.rating);

        res.render('details', { movie, isAuthor});
    },
    search: async (req, res) => {
        const movies = await getAllMovies();
        res.render('search', { movies }); // TODO Search
    },
    editGet: async (req,res) => {
        const id=req.params.id;
        const movie = await getMovieById(id);
        res.render('edit', { movie });
    }
};