import React, { Component } from 'react';
import ArticleCard from './ArticleCard';
import { connect } from 'react-redux'
import { fetchArticles } from './actions/articleActions'

class Articles extends Component {

    componentDidMount(){
      this.props.fetchArticles()
    }

      render(){
        const { articles } this.props
        const renderCards = articles.map((article, idx) => <ArticleCard key={idx} article={article}/>)

        return(
            <div>
                <h2>Articles</h2>
                {renderCards}
            </div>
        )
      }
}

const mapStateToProps = state = {
  articles: state.articles
}
export default connect (mapStateToProps, {fetchArticles})(Articles)
