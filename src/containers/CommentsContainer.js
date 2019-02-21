import React, { Component } from 'react';
import Comments from '../components/Comments';


class CommentsContainer extends Component {

      render(){
        const { comments } = this.props
        
        return(
            <div>
                <Comments comments={comments} />
            </div>
        )
      }
}

export default CommentsContainer
