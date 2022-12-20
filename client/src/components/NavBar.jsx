import React from 'react'
import { Link,Nav, NavLink,useNavigate} from 'react-router-dom'
import axios from 'axios'

const NavBar = () => {
    const navigate= useNavigate();
    const logout = (e) =>{
        axios.get('http://localhost:8000/api/logout',{withCredentials:true,credentials:'include'})
        .then((res) => {
                navigate('/')
            })
    }
    return (
        <div>
            <div className='bg-dark'>
                <h2 className='text-warning'>My Movie.dB</h2>
                <NavLink to='/form'>Just Form</NavLink>
                <NavLink to='/list'>JUst List</NavLink>
                <NavLink to='/'>Login</NavLink>
                <Link onClick={logout}>Logout</Link>
            </div>
        </div>
    )
}

export default NavBar