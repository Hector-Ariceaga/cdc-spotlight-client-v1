import React from 'react';
import Article from './Article';

const Articles = ({articles}) => {
    const renderArticles = articles.map((article, idx) => 
        <Article key={idx} article={article}/>
    )
    return(
        <div>
            <h2>Today's Articles</h2>
            {renderArticles}
        </div>
    )
}

export default Articles;
