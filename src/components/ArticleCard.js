import React from 'react';
import { Link } from 'react-router-dom'

const ArticleCard = (props) => {

    const {id, title, author, description} = props.article
    
    return(
        <div>
            <h1>{title}</h1>
            <h3>{author}</h3>
            <p>{description}</p>
            <Link to={`/articles/${id}`}>See Full Article</Link>
        </div>
    )
}

export default ArticleCard;
