import React, { Component } from 'react';
import ArticleCard from './ArticleCard'

class ArticleCards extends Component {
    
    render () {
        
        function isEmpty(obj) {
            return Object.keys(obj).length === 0;
        }

        if (isEmpty(this.props.articles)) {
            return(<div>No Articles</div>)
        } else {
            const renderCards = this.props.articles.map(article => <ArticleCard key={article.id} article={article} />)

        return (
            <div className='article_cards'>
                {renderCards}
            </div>
        )}
    }
}

export default ArticleCards;