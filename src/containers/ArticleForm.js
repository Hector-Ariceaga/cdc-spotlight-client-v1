import React, { Component } from 'react';

export default class ArticleForm extends Component {
    handleOnSubmit = event => {
        event.preventDefault()
        this.props.onSubmit(event)
    }

    handleOnChange = event => {
        this.props.onChange(event)
    }

    render(){
        const { title, author, description, content } = this.props.article

        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <div>
                        <label> Title
                            <input
                                name='title'
                                type='text'
                                value={ title }
                                onChange={this.handleOnChange} />
                        </label>
                    </div>
                    <div>
                        <label> Author
                            <input
                                name='author'
                                type='text'
                                value={ author }
                                onChange={this.handleOnChange} />
                        </label>
                    </div>
                    <div>
                        <label> Description
                            <input
                                name='description'
                                type='text'
                                value={ description }
                                onChange={this.handleOnChange} />
                        </label>
                    </div>
                    <div>
                        <label> Content
                            <textarea
                                name='content'
                                value={ content }
                                onChange={this.handleOnChange} />
                        </label>
                    </div>
                    <div>
                        <input type='submit' value={this.props.submitValue} />
                    </div>
                </form>
            </div>
        )
    }
}