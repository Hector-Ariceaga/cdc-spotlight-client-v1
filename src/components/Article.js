import React from 'react';
import Comments from './Comments'

const Article = ({article}) => {
    return(
        <div>
            <h1>{article.title}</h1>
            <h3>{article.author}</h3>
            <p>{article.content}</p>
            <Comments comments={article.comments} />
        </div>
    )
}

export default Article;
