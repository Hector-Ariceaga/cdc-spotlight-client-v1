import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='navbar navbar-expand-sm navbar-backdrop navbar-light font-weight-bold sticky-top'>
            <ul className='navbar-nav navbar-header mr-auto'>
             <li>
             <NavLink to='/' exact className='nav-link'>Home</NavLink>
             </li>
             <li>
             <NavLink to='/articles' exact className='nav-link'>All Articles</NavLink>
             </li>
             <li>
             <NavLink to='/articles/new' exact className='nav-link'>Add New Article</NavLink>
             </li>
             <li>
             <NavLink to='/about' exact className='nav-link'>About</NavLink>
             </li>
            </ul>
           
           
            
            
          
        </div>
    )
}

export default NavBar;
