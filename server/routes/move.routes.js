const MoviceController = require('../controllers/movie.controller');

module.exports = app => {
    app.get('/api/createMovie', MovieController.createMovie);
    app.get('/api/getMovies', MovieController.getAllMovies);
    app.post('/api/getMovie/:_id', MovieController.getMovieById);
    app.put('/api/updateMovie/:_id', MovieController.updateMovie);
    app.delete('/api/deleteMovie/:_id', MovieController.deleteMovie);
}