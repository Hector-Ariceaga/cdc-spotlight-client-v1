import React from 'react';
import { Link } from 'react-router-dom'

const ArticleCard = (props) => {

    const {id, title, author, description} = props.article
    
    return(
        <div>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-6 shadow p-3 mb-5 bg-white rounded article-card'>
                        <h2>{title}</h2>
                        <h5>{author}</h5>
                        <p>{description}</p>
                        <Link to={`/articles/${id}`}>See Full Article</Link>
                    </div>
                 </div>     
            </div> 
        </div>
    )
}

export default ArticleCard;
