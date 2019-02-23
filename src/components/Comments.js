import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comment from './Comment';
import { fetchComments, removeComments } from '../actions/commentActions';

class Comments extends Component {
    componentWillUnmount = () => {
        this.props.removeComments()
    }

    render(){
        let renderComments;
        const {comments} = this.props

        if (comments === undefined || Object.entries(comments).length === 0) {
            renderComments = ''
        } else {
            renderComments = comments.map(comment =>  <Comment key={comment.id} comment={comment} />)
        }

        return(
            <div>
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
export default connect(mapStateToProps, {fetchComments, removeComments})(Comments);
