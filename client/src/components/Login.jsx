import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const [email, setEmail ] = useState('')
    const [password, setPassword ] = useState('')
    const navigate = useNavigate();
    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/login', {
            email,
            password,
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
            <div>
            <form className='col-6 mx-auto my-4' onSubmit={handleSubmit}>
                <div className='d-flex align-items-center'>
                    <label htmlFor='' className='form=label'>Email:</label>
                    <input className='form-control' type='email' onChange={e=>setEmail(e.target.value)}/>
                </div>
                <div className='d-flex'>
                    <label htmlFor='' className='form=label'>Password: </label>
                    <input className='form-control' type='password' onChange={e=>setPassword(e.target.value)}/>
                </div>
                <input className='my-4' type='submit' value='Login'/>
            </form>
        </div>
        </div>
    )
}

export default Login