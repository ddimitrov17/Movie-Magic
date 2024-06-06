const { Movie } = require('../models/Movie');

async function getAllMovies() {
    const movies=await Movie.find().lean();
    return movies;
}

async function getMovieById(id) {
    const movies = await readFile();
    const movie=movies.find(m => m.id==id);
    return movie ? toMovieModel(movie) : undefined;
}

module.exports = {
    getAllMovies,
    getMovieById
} 