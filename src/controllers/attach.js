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
        const castInMovie = movie.cast.map(id => id.toString());

        res.render('cast-attach', { movie, allCast: allCast.filter(c => !castInMovie.find(castId => castId == c._id.toString())) });
    }
}