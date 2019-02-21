import React from 'react';

const Comment = ({comment}) => {

    return (
        
        <div>
            {comment.username} {comment.content}
            <div>
                {comment.review}
            </div>
        </div>
    )

}

export default Comment;