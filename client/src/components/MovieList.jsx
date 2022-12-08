import React, {useState,useEffect} from 'react'
import axios from 'axios'

const MovieList = () => {
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
                        <p>{film.title}, {film.releaseYear} </p>
                    </div>
                ))
            }
        </div>
    )
}

export default MovieList