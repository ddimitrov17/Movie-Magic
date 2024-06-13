const { getMovieById, attachCastToMovie } = require('../services/movieService');
const { getAllCast } = require('../services/castService');

module.exports = {
    attachGet: async (req, res) => {
        const id = req.params.id;
        const movie = await getMovieById(id);

        if (!movie) {
            res.render('404');
            return;
        }

        const allCast = await getAllCast();
        console.log(movie.cast);
        const castInMovie = movie.cast.map(cast => cast._id.toString());
        console.log(castInMovie);
        res.render('cast-attach', { movie, allCast: allCast.filter(c => !castInMovie.includes(c._id.toString())) });
    },
    attachPost: async (req, res) => {
        const movieId = req.params.id;
        const castId = req.body.cast;

        if (!movieId || !castId) {
            console.error(`Missing Movie or Cast`);
            res.status(400).end();
            return;
        }

        if (castId == 'none') {
            const movie = await getMovieById(movieId);
            const allCast = await getAllCast();
            res.render('cast-attach', { movie, allCast, error: true });

            return;
        }

        try {
            await attachCastToMovie(movieId, castId);
        } catch (err) {
            console.error('Error adding cast to movie', err);
            res.status(400).end();
            return;
        }

        res.redirect('/details/' + movieId);
    }
}