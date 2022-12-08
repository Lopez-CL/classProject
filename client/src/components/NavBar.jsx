import React from 'react'
import { Link,Nav, NavLink} from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <div className='bg-dark'>
                <h2 className='text-warning'>My Movie.dB</h2>
                <NavLink to='/form'>Just Form</NavLink>
                <NavLink to='/list'>JUst List</NavLink>
            </div>
        </div>
    )
}

export default NavBar