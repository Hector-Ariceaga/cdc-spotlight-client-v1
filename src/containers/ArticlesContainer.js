import React, { Component } from 'react';
import ArticleCards from '../components/ArticleCards'
import { connect } from 'react-redux'
import { fetchArticles } from '../actions/articleActions'


class ArticlesContainer extends Component {

    componentDidMount = () => {
      this.props.fetchArticles()
    }

      render(){
        const { allArticles } = this.props.articles
        
        return(
            <div>
                <h2>Articles</h2>
                <ArticleCards articles={allArticles} />
            </div>
        )
      }
}

const mapStateToProps = state => {
  return {
    articles: state.articles
  } 
}

export default connect(mapStateToProps, {fetchArticles})(ArticlesContainer)
