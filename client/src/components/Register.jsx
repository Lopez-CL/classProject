import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Register = () => {
    const [userName, setUserName ] = useState('')
    const [email, setEmail ] = useState('')
    const [password, setPassword ] = useState('')
    const [confirmPassword, setConfirmPassword ] = useState('')
    const navigate = useNavigate();
    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/register', {
            userName,
            email,
            password,
            confirmPassword
        }, {withCredentials:true,credentials:'include'})
        .then((res)=>{
            console.log(res.data)
            navigate('/list')
        })
        .catch((err)=>{
            console.log('error on front end')
            console.log(err)
        })
    }
    return (
        <div>
            <form className='col-3 mx-auto my-4' onSubmit={handleSubmit}>
                <div className='d-flex align-items-center my-3 '>
                    <label htmlFor='' className='form-label mx-3'>Username:</label>
                    <input className='form-control' type='text' onChange={e=> setUserName(e.target.value)}/>
                </div>
                <div className='d-flex align-items-center my-3'>
                    <label htmlFor='' className='form-label mx-3'>Email:</label>
                    <input className='form-control' type='email' onChange={e=> setEmail(e.target.value)}/>
                </div>
                <div className='d-flex align-items-center my-3'>
                    <label htmlFor='' className='form-label mx-3'>Password: </label>
                    <input className='form-control' type='password' onChange={e=>setPassword(e.target.value)}/>
                </div>
                <div className='d-flex align-items-center my-3'>
                    <label htmlFor='' className='form-label mx-3'>Confirm Password: </label>
                    <input className='form-control' type='password' onChange={e=>setConfirmPassword(e.target.value)}/>
                </div>
                <input className='my-4' type='submit' value='Register'/>
            </form>
        </div>
    )
}

export default Register