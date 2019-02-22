import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import CommentsContainer from '../containers/CommentsContainer';
import {fetchComments} from '../actions/commentActions'
import {fetchArticle} from '../actions/articleActions'

class Article extends Component {
    componentWillMount = () => {
        this.props.fetchArticle(this.props.articleId)
        this.props.fetchComments(this.props.articleId)
    }

    componentWillReceiveProps = (props) => {
        if (props.article.id === undefined) {
            this.props.history.push('/articles')
        }
    }
    
    render(){
     const {title, author, content} = this.props.article
        return(
            <div>
                <h1>{title}</h1>
                <h3>{author}</h3>
                <p>{content}</p>
            </div>
        )
    }
}



const mapStateToProps = (state, ownProps) => {
    return {
        article: state.articles.article,
        articleId: ownProps.match.params.id
    }
}

export default connect(mapStateToProps, {fetchComments, fetchArticle })(Article);
