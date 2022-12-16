const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;
require('dotenv').config()
const cookieParser = require('cookie-parser')
app.use(cors({
    origin: 'http://localhost:3000',
}))
app.use(express.json(), express.urlencoded({ extended: true }));
require('./config/mongoose.config');
const movieRoutes = require('./routes/movie.routes')
movieRoutes(app)
const userRoutes = require('./routes/user.routes')
userRoutes(app);


app.listen(port, () => console.log(`Listening on port ${port}!`));