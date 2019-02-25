import React, { Component } from 'react';
import { connect } from 'react-redux'
import CommentsContainer from './CommentsContainer';
import {fetchComments} from '../actions/commentActions'
import {fetchArticle} from '../actions/articleActions'

class Article extends Component {
    componentDidMount = (props) => {
        if (this.props.articles.allArticles.length > 0){
            let articleId = parseInt(this.props.match.params.id)
            this.props.articles.allArticles.forEach(article => {
                if (article.id === articleId) {return article} 
            })
        } else {
            this.props.fetchArticle(this.props.articleId)
        }
    }
        

    componentWillReceiveProps = (props) => {
        if (props.article.id === undefined) {
            this.props.history.push('/articles')
        }
    }
    
    render(){
     const {id, title, author, content} = this.props.article
        return(
            <div className='article-backdrop'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-md-12 shadow p-3 mb-5 bg-white rounded'>
                            <h1 className='lg-text'>{title}</h1>
                            <h4>{author}</h4>
                            <p>{content}</p>
                            <CommentsContainer comments={this.props.comments} articleId={id}/>
                        </div>
                    </div>
                </div>
            </div>
           
            
        )
    }
}



const mapStateToProps = (state, ownProps) => {
    return {
        articles: state.articles,
        article: state.articles.article,
        articleId: ownProps.match.params.id
    }
}

export default connect(mapStateToProps, {fetchComments, fetchArticle })(Article);
