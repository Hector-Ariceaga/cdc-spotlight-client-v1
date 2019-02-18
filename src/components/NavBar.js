import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = ({articles}) => {
    return (
        <div className='navbar'>
            <NavLink to='/' exact >Home</NavLink>
            <NavLink to='/articles' exact>Articles</NavLink>
            <NavLink to='/about' exact>About</NavLink>
        </div>
    )
}

export default NavBar;
