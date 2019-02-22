import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComments} from '../actions/commentActions'
import Comments from '../components/Comments'



class CommentsContainer extends Component {

    handleOnClick = () => {
        this.props.fetchComments(this.props.articleId)
    }

    render(){
            return(
                <div>
                    <h2>Comments</h2>
                    <button onClick={this.handleOnClick}>Load Comments</button>
                    <Comments comments={this.props.comments} />
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
