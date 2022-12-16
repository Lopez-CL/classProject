const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;
require('dotenv').config()
const cookieParser = require('cookie-parser')


//middleware that adds post data to body of request
app.use(express.json(), express.urlencoded({ extended: true }))
//middleware that adds post data to body of request
app.use(cookieParser());

app.use(cors({
    origin: 'http://localhost:3000', credentials: true
}))

require('./config/mongoose.config');
require('./config/jwt.config');
require('./routes/movie.routes')(app)
require('./routes/user.routes')(app);


app.listen(port, () => console.log(`Listening on port ${port}!`));