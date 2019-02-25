import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
    
    return(
        <div className='backdrop' id='jumbotron'>
            <div class='container ' >
            <div className='row'> 
                <div className='col-md6 mx-auto my-5 ' >
                <h1 className='light-header'>Welcome to Spotlight!</h1>
                
                <NavLink to='/articles' exact><button type="button" className="btn btn-primary btn-lg btn-secondary">Start Reading!</button></NavLink>
                </div>
            </div>
           
            </div>
        </div>
    )
}

export default Home;
