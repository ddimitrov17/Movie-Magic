const { createMovie } = require('../services/movieService');

module.exports = {
    createGet: (req, res) => {
        res.render('create');
    },
    createPost: async (req, res) => {
        const errors = {
            title: !req.body.title,
            genre: !req.body.genre,
            director: !req.body.director,
            year: !req.body.year,
            imageURL: !req.body.imageURL,
            rating: !req.body.rating,
            description: !req.body.description
        };
        req.body.author = req.user._id;
        console.log(req.user._id);
        if (Object.values(errors).includes(true)) {
            // res.render('create', { movie: req.body, errors });
            return;
        }
        const result = await createMovie(req.body);

        res.redirect('/details/' + result._id);
    }
};