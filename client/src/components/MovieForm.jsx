import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const MovieForm = () => {
    const [title,setTitle] = useState('');
    const [director,setDirector] = useState('');
    const [rating,setRating] = useState('');
    const [genre,setGenre] = useState('');
    const [releaseYear,setReleaseYear] = useState('');
    const [boxOffice,setBoxOffice] = useState('');
    const [kidFriendly,setKidFriendly] = useState('');
    const [boxArt,setBoxArt] = useState('');
    const [errors, setErrors] = useState({})
    const navigate = useNavigate();
    // const {movies, setMovies} = props;
    const submitHandler = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/createMovie', {
            title,
            director,
            rating,
            genre,
            releaseYear,
            boxOffice,
            kidFriendly,
            boxArt
        })
        .then(res =>{
            console.log(res);
            console.log(res.data);
            navigate('/list')
            console.log('catch from the back-end')
            // setMovies([...movies,res.data])
        })
        .catch(err => {
            console.log(err)
            console.log('error is caught on the front-end')
            setErrors(err.response.data.errors);
        })
        setTitle('');
        setDirector('');
        setRating('');
        setRating('');
        setGenre('');
        setReleaseYear('');
        setBoxOffice('');
        setKidFriendly('');
        setBoxArt('');
    }
    return (
        <div className='col-6 mx-auto'>
            <h1>Create A Movie:</h1>
            <form onSubmit={submitHandler}>
                <label className='form-label' htmlFor="">Title:</label>
                {errors.title?<p className='text-danger'>{errors.title.message}</p>:''}
                <input className='form-control' type="text" onChange={e =>setTitle(e.target.value)} value={title} />
                <label className='form-label' htmlFor="">Director:</label>
                {errors.director?<p className='text-danger'>{errors.director.message}</p>:''}
                <input className='form-control' type="text" onChange={e =>setDirector(e.target.value)} value={director} />
                <label className='form-label' htmlFor="">Rating:</label>
                {errors.rating?<p className='text-danger'>{errors.rating.message}</p>:''}
                <select className='form-control' type="text" onChange={e =>setRating(e.target.value)}>
                    <option>Select a Rating</option>
                    <option value='G'>G</option>
                    <option value='PG' >PG</option>
                    <option value='PG-13' >PG-13</option>
                    <option value='R' >R</option>
                    <option value='NC-17' >NC-17</option>
                </select>
                <label className='form-label' htmlFor="">Genre:</label>
                {errors.genre?<p className='text-danger'>{errors.genre.message}</p>:''}
                <select className='form-control' type="text" onChange={e =>setGenre(e.target.value)}>
                    <option>Select a Genre</option>
                    <option value='Comedy'>Comedy</option>
                    <option value='Drama'>Drama</option>
                    <option value='Horror'>Horror</option>
                    <option value='Sci-Fi'>Sci-Fi</option>
                    <option value='Fantasy'>Fantasy</option>
                    <option value='Action'>Action</option>
                    <option value='Family'>Family</option>
                    <option value='Animated'>Animated</option>
                    <option value='Documentary'>Documentary</option>
                    <option value='Romcom'>Romcom</option>
                    <option value='Silent Movie'>Silent Movie</option>
                    <option value='Thriller'>Thriller</option>
                    <option value='French Cinema'>French Cinema</option>
                    <option value='CriHoror/Comedyme'>Horor/Comedy</option>
                    <option value='Kung-fu'>Kung-fu</option>
                    <option value='Bollywood'>Bollywood</option>
                </select>
                <label className='form-label' htmlFor="">Release Date:</label>
                {errors.releaseYear?<p className='text-danger'>{errors.releaseYear.message}</p>:''}
                <input className='form-control' type="number" onChange={e =>setReleaseYear(e.target.value)} value={releaseYear}/>
                <label className='form-label' htmlFor="">Box Office</label>
                {errors.boxOffice?<p className='text-danger'>{errors.boxOffice.message}</p>:''}
                <input className='form-control' type="number" onChange={e =>setBoxOffice(e.target.value)} value={boxOffice}/>
                <label className='form-label' htmlFor="">Kid Friendly?</label>
                {errors.kidFriendly?<p className='text-danger'>{errors.kidFriendly.message}</p>:null}
                <input className='form-control' type="text" onChange={e =>setKidFriendly(e.target.value)} value={kidFriendly} />
                <label className='form-label' htmlFor="">Film Poster</label>
                {errors.boxArt?<p className='text-danger'>{errors.boxArt.message}</p>:''}
                <input className='form-control' type="text" onChange={e =>setBoxArt(e.target.value)} value={boxArt}/><br></br>
                <input className='form-control btn btn-primary' type="submit" value='Add Film'/>
            </form>
        </div>
    )
}

export default MovieForm