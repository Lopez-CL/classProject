import React, {useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const MovieList = (props) => {
    const [movies,setMovies] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/getMovies')
            .then((res) =>{
                console.log(res)
                console.log(res.data)
                setMovies(res.data)
            })
            .catch((err)=>(console.log(err)))
    }, [])
    const deleteMovie = (filmId) =>{
        axios.delete(`http://localhost:8000/api/deleteMovie/${filmId}`)
            .then( res => {
                // alert('movie deleted!');
                let updatedList = (movies.filter)(movieItem => movieItem._id !== filmId)
                setMovies(updatedList);
            })
    }
    return (
        <div>
            <h2>Movies Added so Far!</h2>
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