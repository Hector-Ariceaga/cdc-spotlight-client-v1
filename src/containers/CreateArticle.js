import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArticleForm from '../components/ArticleForm'
import { createArticle } from '../actions/articleActions'

class CreateArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            author: '',
            description: '',
            content: ''
        }
    }

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.createArticle(this.state)
        .then(id => this.props.history.push(`/articles/${id}`))
    }

    handleOnChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div class='form-backdrop fill'>
                <h1>Create Article</h1>
                <ArticleForm
                    article={this.state}
                    submitValue='Create Student'
                    onSubmit={this.handleOnSubmit}
                    onChange={this.handleOnChange} />
            </div>
        )
    }
}

export default connect(null, { createArticle })(CreateArticle)
