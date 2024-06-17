const mongoose = require('mongoose');
const { User } = require('../models/User');
require('../models/Cast');
const { Movie } = require('../models/Movie');

const connectionString = 'mongodb://localhost:27017/movie-magic';

async function configDatabase() {
    await mongoose.connect(connectionString);
    // await migrateMovies();
    console.log('Database connected');
}

module.exports = { configDatabase };

// async function migrateMovies() {
//     const firstUser = await User.findOne();
//     await Movie.updateMany({}, { $set: { author: firstUser._id } });
// }