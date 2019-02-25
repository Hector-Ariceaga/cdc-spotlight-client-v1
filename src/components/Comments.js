import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comment from './Comment';
// import CreateComment from '../containers/CreateComment'
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
                <br></br>
                <button type='button' className='btn btn-secondary' disabled>Add a comment</button>
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
