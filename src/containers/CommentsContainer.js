import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComments} from '../actions/commentActions'
import Comments from '../components/Comments'



class CommentsContainer extends Component {
    
    componentDidMount = () => {
        this.props.fetchComments(this.props.articleId)
    }

    render(){
        return(
            <div>
                <div className='comments'>
                    <h2>Comments</h2>
                    <Comments articleId={this.props.articleId} />
                </div>
                
            </div>
        )
     }
}

const mapStateToProps = state => {
    return {
        comments: state.comments,
    }
}

export default connect(mapStateToProps, {fetchComments})(CommentsContainer);
