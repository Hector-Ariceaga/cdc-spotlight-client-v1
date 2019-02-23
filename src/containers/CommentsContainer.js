import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComments} from '../actions/commentActions'
import Comments from '../components/Comments'



class CommentsContainer extends Component {
    
    handleOnClick = () => {
        this.props.fetchComments(this.props.articleId)
    }


    render(){
        let noComments;
        if (this.props.comments.length === 0) {
            noComments = <div>There are currently no comments for this article.</div>
        }
            return(
                <div>
                    <h2>Comments</h2>
                    <button onClick={this.handleOnClick}>Load Comments</button>
                    <Comments article={this.props.articleId} />
                    {noComments}
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
