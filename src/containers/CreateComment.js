import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentForm from '../components/CommentForm'
import { createComment } from '../actions/commentActions'

class CreateComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articleId: props.articleId,
            username: '',
            content: ''
        }
    }

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.createComment(this.state)
        this.setState({
            articleId: this.props.articleId,
            username: '',
            content: ''
        })

    }

    handleOnChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div>
                <h4>Add a Comment</h4>
                <CommentForm
                    comment={this.state}
                    submitValue='Submit'
                    onSubmit={this.handleOnSubmit}
                    onChange={this.handleOnChange} />
            </div>
        )
    }
}

export default connect(null, { createComment })(CreateComment)
