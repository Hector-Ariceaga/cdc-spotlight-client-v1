import React from 'react';

const ArticleCard = ({article}) => {
    
    return(
        <div className='article_card'>
            <h2>{article.title}</h2>
            <h4>{article.author}</h4>
            <p>{article.content}</p>
        </div>
    )
}

export default ArticleCard;
