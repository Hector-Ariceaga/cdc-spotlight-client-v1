import React from 'react';

const About = () => {
    return (
        <div className='about-backdrop fill'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-lg-9 about rounded' >
                        <p className='lg-text'>Thank you for supporting your favorite article cataloger, Spotlight.</p>
                        <br/>
                        <p className='md-text'>This application was developed in 2019 by Hector Ariceaga as way of viewing and cataloging articles. It utilizes a combination of React and Redux for the front-end and features a Rails API on the back-end. It is a handy SPA that utilizes RESTful routing and Bootstrap styling.</p>
                        <p>Please stay tuned for additional features...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;