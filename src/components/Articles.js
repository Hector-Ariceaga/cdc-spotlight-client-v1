import React, { Component } from 'react';
import ArticleCards from './ArticleCards'
import { connect } from 'react-redux'
import { fetchArticles } from '../actions/articleActions'


class Articles extends Component {

    componentDidMount(){
      this.props.fetchArticles()
    }

      render(){
        const { articles } = this.props

        return(
            <div>
                <h2>Articles</h2>
                <ArticleCards articles={articles} />
            </div>
        )
      }
}

const mapStateToProps = state => {
 return {articles: state.articles} 
}

export default connect (mapStateToProps, {fetchArticles})(Articles)
