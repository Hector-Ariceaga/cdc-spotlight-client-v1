import React from 'react';
import ArticleCard from './ArticleCard';

const Articles = ({articles}) => {
    const renderArticles = articles.map((article, idx) => 
        <ArticleCard key={idx} article={article}/>
    )
    return(
        <div>
            <h2>Today's Articles</h2>
            {renderArticles}
        </div>
    )
}

export default Articles;
