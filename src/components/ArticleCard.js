import React from 'react';

const ArticleCard = ({article}) => {
    
    return(
        <div className='article_card'>
            <h3>{article.title}</h3>
            <p>{article.author}</p>
            <p>{article.description}</p>
        </div>
    )
}

export default ArticleCard;
