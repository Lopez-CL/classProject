import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const OneMovie = () => {
    const { _id } = useParams()
    const [movie, setMovie] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
    axios.get(`http://localhost:8000/api/getMovie/${_id}`, {withCredentials:true})
        .then(res => {
            setMovie(res.data)
        })
        .catch(err => console.log(err))
    }, [])
    const deleteMovie = (filmId) =>{
        axios.delete(`http://localhost:8000/api/deleteMovie/${filmId}`,)
            .then( res => {
                alert('movie deleted!');
            })
    }
    return (
        <div>
            {
                <div className='card col-7 mx-auto my-5'>
                    <h2>{movie.title}</h2>
                    <p>Director: {movie.director}, release date: {movie.releaseYear}, Genre: {movie.genre}</p>
                    <div>
                    <button className='btn btn-danger'onClick={(e) => deleteMovie(movie._id)} >Remove</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default OneMovie