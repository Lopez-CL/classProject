const MovieController = require('../controllers/movie.controller');
const { authenticate } = require('../config/jwt.config')
module.exports = app => {
    app.post('/api/createMovie', authenticate, MovieController.createMovie);
    app.get('/api/getMovies', authenticate, MovieController.getAllMovies);
    app.get('/api/getMovie/:_id', authenticate, MovieController.getMovieById);
    app.put('/api/updateMovie/:_id', authenticate, MovieController.updateMovie);
    app.delete('/api/deleteMovie/:_id', authenticate, MovieController.deleteMovie);
}