import React, { Component } from 'react';
import { connect } from 'react-redux'
import CommentsContainer from './CommentsContainer';
import {fetchComments} from '../actions/commentActions'
import {fetchArticle} from '../actions/articleActions'

class Article extends Component {
    componentDidMount = () => {
        this.props.fetchArticle(this.props.articleId)
    }

    componentWillReceiveProps = (props) => {
        if (props.article.id === undefined) {
            this.props.history.push('/articles')
        }
    }
    
    render(){
     const {id, title, author, content} = this.props.article
        return(
            <div>
                <h1>{title}</h1>
                <h3>{author}</h3>
                <p>{content}</p>
                <CommentsContainer comments={this.props.comments} articleId={id}/>
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
