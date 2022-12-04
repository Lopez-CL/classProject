const Movie = require('../models/movie.model');

module.exports.createMovie = (res, req) => {
    const {body} = req;
    Movie.create(body)
        .then((newMovie) => res.json(newMovie))
        .catch((err) => console.log(err));
};
module.exports.getAllMovies = (res, req) => {
    Movie.find()
        .then((allMovies) => res.json(allMovies))
        .catch((err) => console.log(err));
};
module.exports.getMovieById = (res, req) => {
    const {params} = req;
    Movie.findOne({_id: params._id})
        .then((movie) => res.json(movie))
        .catch((err) => console.log(err));
};
module.exports.updateMovie = (res, req) => {
    const {body, params} = req;
    Movie.findOneAndUpdate({_id: params._id}, body, {
        new: true,
        runValidators: true,
    })
        .then((updatedMovie) => res.json(updatedMovie))
        .catch((err) => console.log(err));
};
module.exports.deleteMovie = (res, req) => {
    const {params} = req;
    Movie.deleteOne({_id: params._id})
        .then((result) => res.json(result))
        .catch((err) => console.log(err));
};