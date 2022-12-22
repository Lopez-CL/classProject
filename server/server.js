const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;
require('dotenv').config()
const cookieParser = require('cookie-parser')
const socket = require('socket.io')
const Movie = require('./models/movie.model')


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


const server = app.listen(port, () => console.log(`Listening on port ${port}!`));
const io = socket(server, {
    cors:{
        origin:'*',
        methods: ['GET','POST']
    }
})

io.on('connection', (socket)=>{
    console.log('new user-socket', socket.id)

    socket.on('deleteMovie', (payload)=>{
        console.log('payload:',payload)
        Movie.deleteOne({_id:payload})
        .then((result) => {
            io.emit('movieDeleted',payload)
        })
        .catch((err) => {
            console.log(err)
        });
    })

    socket.on('disconnect', (socket)=>{
        console.log('disconnected socket with id:', socket.id)
    })
})

// .on() = when this message is received, do this
// .emit() = when an event happens let every other socket know about it