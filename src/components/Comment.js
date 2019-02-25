import React from 'react';

const Comment = props => {
    const {comment} = props

    return (

        <div className='container'>
            <div className='row text-left'>
                <div className='col-md-4 text-left text-info'>{comment.username}</div>
            </div>
            <div className='row text-let'>
                <div className='col-md-4 text-left text-muted sm-text'>{comment.content}</div>
            </div>
            <div>
                {comment.review}
            </div>
        </div>
    )

}

export default Comment;