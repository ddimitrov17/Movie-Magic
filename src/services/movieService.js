const { Movie } = require('../models/Movie');

async function getAllMovies() {
    const movies=await Movie.find().lean();
    return movies;
}

async function getMovieById(id) {
    const movie=await Movie.findById(id).lean().populate('cast');
    return movie;
}

async function createMovie(movieData) {
    const movie = new Movie({
        title: movieData.title,
        genre: movieData.genre,
        director: movieData.director,
        year: Number(movieData.year),
        rating: Number(movieData.rating),
        description: movieData.description,
        imageURL: movieData.imageURL,
        author: movieData.author
    });

    await movie.save();

    return movie;
}

async function updateMovie(movieId,movieData) {
    const movie = await Movie.findById(movieId);
        movie.title = movieData.title;
        movie.genre = movieData.genre;
        movie.director = movieData.director;
        movie.year = Number(movieData.year);
        movie.rating = Number(movieData.rating);
        movie.description = movieData.description;
        movie.imageURL = movieData.imageURL;

    await movie.save();

    return movie;
}

async function deleteMovie(movieId) {
    const movie = await Movie.findById(movieId);
    await Movie.findByIdAndDelete(movieId);
}

async function attachCastToMovie(movieId, castId, userId) {
    const movie = await Movie.findById(movieId);

    if (!movie) {
        throw new Error(`Movie ${movieId} not found`);
    }

    movie.cast.push(castId);

    await movie.save();

    return movie;
}

module.exports = {
    getAllMovies,
    getMovieById,
    createMovie,
    attachCastToMovie,
    updateMovie,
    deleteMovie
} 