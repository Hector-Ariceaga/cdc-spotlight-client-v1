import React from 'react';
import CommentsContainer from '../containers/CommentsContainer';

const Article = ({article}) => {
    return(
        <div>
            <h1>{article.title}</h1>
            <h3>{article.author}</h3>
            <p>{article.content}</p>
            <CommentsContainer comments={article.comments} />
        </div>
    )
}

export default Article;
