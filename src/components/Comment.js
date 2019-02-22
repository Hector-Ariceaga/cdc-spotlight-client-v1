import React from 'react';

const Comment = props => {
    const {comment} = props

    return (

        <div>
            <h4>{comment.username}</h4>
            <p>{comment.content}</p>
            <div>
                {comment.review}
            </div>
        </div>
    )

}

export default Comment;