import React from 'react';
import ArticleCard from './ArticleCard'

const ArticleCards = (props) => {
    
    if (props.articles === undefined || Object.entries(props.articles).length === 0) {
        
        return(<div>Loading...</div>)

    } else {
        const renderCards = props.articles.map(article => <ArticleCard key={article.id} article={article} articles={props.articles}/>)
        return (
            <div>
                {renderCards}
            </div>
        )
    }

}

export default ArticleCards;