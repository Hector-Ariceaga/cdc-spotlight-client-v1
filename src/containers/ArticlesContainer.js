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
            <div className='article-backdrop extend-background'>
                <h1 className='lg-text'>Articles</h1>
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
