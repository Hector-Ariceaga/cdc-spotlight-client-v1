import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchComments } from '../actions/commentActions'
import Comment from '../components/Comment'


class Comments extends Component {
    
    componentDidMount = () => {
        this.props.fetchComments(this.props.articleId)
    }

    render(){
        const comments = this.props.comments
        const renderComments = comments.map(comment => <Comment key={comment.id} comment={comment} />)
            
        return(
            <div>
                <h2>Comments</h2>
                {renderComments}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      comments: state.comments
    } 
  }

export default connect(mapStateToProps, {fetchComments})(Comments);
