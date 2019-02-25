import React from 'react';
import ArticleCard from './ArticleCard'

const ArticleCards = (props) => {
    
    if (props.articles === undefined || Object.entries(props.articles).length === 0) {
        
        return(<div>No Articles</div>)

    } else {
        const renderCards = props.articles.map(article => <ArticleCard key={article.id} article={article} />)

        return (
            <div>
                {renderCards}
            </div>
        )
    }

}

export default ArticleCards;