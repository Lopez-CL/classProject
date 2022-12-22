import React, {useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const MovieList = (props) => {
    const [movies,setMovies] = useState([]);
    const {socket} = props
    useEffect(()=>{
        axios.get('http://localhost:8000/api/getMovies',{withCredentials:true})
            .then((res) =>{
                console.log(res)
                console.log(res.data)
                setMovies(res.data)
            })
            .catch((err)=>(console.log(err)))
        }, [])
    socket.on('movieDeleted',(deletedId) =>{
        let updatedList = (movies.filter)(movieItem => movieItem._id !== deletedId)
            setMovies(updatedList);
    })
    const deleteMovie = (filmId) =>{
        socket.emit('deleteMovie',filmId )
            let updatedList = (movies.filter)(movieItem => movieItem._id !== filmId)
            setMovies(updatedList);
        // axios.delete(`http://localhost:8000/api/deleteMovie/${filmId}`, {withCredentials:true})
        //     .then( res => {
        //         // alert('movie deleted!');

        //     })
    }
    return (
        <div>
            <h2>Movies Added so Far!!</h2>
            {
                movies.map((movie, index) =>(
                    <div key={index}>
                        <Link to={`/onemovie/${movie._id}`}>{movie.title}, {movie.releaseYear} </Link><br/>
                        <img className='col-3' src={movie.boxArt}/>
                        <div>
                        <Link to={`/edit/movie/${movie._id}`}>Edit</Link>
                        <button className='btn btn-danger'onClick={(e) => deleteMovie(movie._id)} >Remove</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default MovieList