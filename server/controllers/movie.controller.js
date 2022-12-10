const Movie = require('../models/movie.model');

module.exports.createMovie = (req, res) => {
    const {body} = req;
    Movie.create(body)
        .then((newMovie) => res.json(newMovie))
        .catch((err) => {
            console.log(err)
            res.status(400).json(err)
        });
};
module.exports.getAllMovies = (req, res) => {
    Movie.find()
        .then((allMovies) => res.json(allMovies))
        .catch((err) => {
            console.log(err)
            res.status(400).json(err)
        });
};
module.exports.getMovieById = (req, res) => {
    const {params} = req;
    Movie.findOne({_id: params._id})
        .then((movie) => res.json(movie))
        .catch((err) => {
            console.log(err)
            res.status(400).json(err)
        });
};
module.exports.updateMovie = (req, res) => {
    const {body, params} = req;
    Movie.findOneAndUpdate({_id: params._id}, body, {
        new: true,
        runValidators: true,
    })
        .then((updatedMovie) => res.json(updatedMovie))
        .catch((err) => {
            console.log(err)
            res.status(400).json(err)
        });
};
module.exports.deleteMovie = (req, res) => {
    const {params} = req;
    Movie.deleteOne({_id: params._id})
        .then((result) => res.json(result))
        .catch((err) => {
            console.log(err)
            res.status(400).json(err)
        });
};