import React from 'react';
import Comment from './Comment'


const Comments = (props) => {
    let renderComments;
    if (props.comments === undefined || Object.entries(props.comments).length === 0) {
        renderComments = ''
    } else {
    renderComments = props.comments.map(comment => {return <Comment key={comment.id} comment={comment} />})
    }
    return(
        <div>
            {renderComments}
        </div>
    )
}

export default Comments;
