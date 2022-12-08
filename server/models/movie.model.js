const mongoose = require('mongoose');

const MovieSchema = mongoose.Schema({
    title: {
        type:String
    },
    director:{
        type: String
    },
    rating: {
        type: String,
        enum: ['P','PG','PG-13','R','NC-17']
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
    },
    releaseYear: {
        type: Number
    },
    boxOffice: {
        type: Number
    },
    kidFriendly: {
        type: Boolean
    },
    boxArt: {
        type: String
    }},
    {timesstamps: true});
    
module.exports = mongoose.model('Movie', MovieSchema);