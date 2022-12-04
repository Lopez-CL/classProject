const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/movie_db',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established connection to the movie database!"))
    .catch(err=> console.log(err,"Something went wrong when connecting to the database. Please review "))