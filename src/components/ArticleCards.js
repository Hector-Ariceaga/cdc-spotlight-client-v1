import React, { Component } from 'react';
import Article from './Article'

class ArticleCards extends Component {
    
    render () {
        
        function isEmpty(obj) {
            return Object.keys(obj).length === 0;
        }

        if (isEmpty(this.props.articles)) {
            return(<div>No Articles</div>)
        } else {
            const renderCards = this.props.articles.map(article => <Article key={article.id} article={article} />)

        return (
            <div className='article_cards'>
                {renderCards}
            </div>
        )}
    }
}

export default ArticleCards;