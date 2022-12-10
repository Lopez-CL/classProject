const mongoose = require('mongoose');

const MovieSchema = mongoose.Schema({
    title: {
        type:String,
        required: [true, 'title is required!']
    },
    director:{
        type: String,
        required: [true, 'director is required!']
    },
    rating: {
        type: String,
        enum: ['P','PG','PG-13','R','NC-17'],
        required: [true, 'rating is required!']
        //enumerable object/array. Sets the value value options to whatever is provided.
    },
    genre: {
        type: String,
        enum: [
            'Comedy',
            'Drama',
            'Horror',
            'Sci-Fi',
            'Fantasy',
            'Action',
            'Family',
            'Animated',
            'Documentary',
            'Romcom',
            'Silent Movie',
            'Thriller',
            'Crime',
            'French Cinema',
            'Horor/Comedy',
            'Kung-fu',
            'Bollywood'
        ],
        required: [true, 'genre is required!'],
    },
    releaseYear: {
        type: Number,
        required: [true, 'please provide a release year']
    },
    boxOffice: {
        type: Number,
        required: [true, 'provide box office number. See IMDb.com for reference!']
    },
    kidFriendly: {
        type: Boolean,
        required: [true, 'please indicate whether movie is kid friendly or not!']
    },
    boxArt: {
        type: String,
        required: [true, 'box art is required!']
    }},
    {timesstamps: true});
    
module.exports = mongoose.model('Movie', MovieSchema);