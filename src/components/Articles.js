import React, { Component } from 'react';
import ArticleCard from './ArticleCard';

export default class Articles extends Component {

    constructor(props) {
        super(props)

        this.state = {
            articles: []
        }
    }

    componentDidMount(){
        fetch('http://localhost:5000/api/v1/articles')
        .then(res => res.json())
        .then( articles => {
          this.setState({
            articles: articles
          })
        })
      }

    
      render(){
        const renderCards = this.state.articles.map((article, idx) => <ArticleCard key={idx} article={article}/>)
        
        return(
            <div>
                <h2>Today's Articles</h2>
                {renderCards}
            </div>
        )
      }
    
}
