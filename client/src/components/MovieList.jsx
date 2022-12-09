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
    return (
        <div>
            <h2>Movies Added so Far!</h2>
            {
                movies.map((film, index) =>(
                    <div key={index}>
                        <Link to={`/onemovie/${film._id}`}>{film.title}, {film.releaseYear} </Link><br/>
                        <img className='col-3' src={film.boxArt}/>
                        <div>
                        <Link to={`/edit/movie/${film._id}`}>Edit</Link>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default MovieList