const MovieController = require('../controllers/movie.controller');

module.exports = app => {
    app.post('/api/createMovie', MovieController.createMovie);
    app.get('/api/getMovies', MovieController.getAllMovies);
    app.get('/api/getMovie/:_id', MovieController.getMovieById);
    app.put('/api/updateMovie/:_id', MovieController.updateMovie);
    app.delete('/api/deleteMovie/:_id', MovieController.deleteMovie);
}