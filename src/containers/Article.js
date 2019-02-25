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
            <div className='article-backdrop fill'>
                <div className='row justify-content-center'>
                    <div className='col-md-9 shadow p-3 mb-5 bg-white rounded'>
                        <h1 className='lg-text'>{title}</h1>
                        <h4>{author}</h4>
                        <p>{content}</p>
                        <CommentsContainer comments={this.props.comments} articleId={id}/>
                    </div>
                </div>
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
