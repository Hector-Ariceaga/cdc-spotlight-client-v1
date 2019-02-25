import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComments} from '../actions/commentActions'
import Comments from '../components/Comments'



class CommentsContainer extends Component {
    
    handleOnClick = () => {
        this.props.fetchComments(this.props.articleId)
    }

    render(){
        let commentHeader;

        if (this.props.comments.length === 0) {
            commentHeader = <div>There are currently no comments for this article.</div>
        } else if(this.props.comments.length > 0) {
            commentHeader = <h2>Comments</h2>
        }

        return(
            <div>
                <button type='button' className='btn btn-light' onClick={this.handleOnClick}>Load Comments</button>

                <div className='comments'>
                    {commentHeader}
                    <Comments article={this.props.articleId} />
                </div>
                
            </div>
        )
     }
}

const mapStateToProps = state => {
    return {
        comments: state.comments

    }
}

export default connect(mapStateToProps, {fetchComments})(CommentsContainer);
