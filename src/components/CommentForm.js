import React, { Component } from 'react';

export default class CommentForm extends Component {
    handleOnSubmit = event => {
        event.preventDefault()
        this.props.onSubmit(event)
    }

    handleOnChange = event => {
        this.props.onChange(event)
    }

    render(){
        const { username, content } = this.props.comment
        
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <div>
                        <label> Username
                            <input
                                name='username'
                                type='text'
                                value={ username }
                                onChange={this.handleOnChange} />
                        </label>
                    
                        <label> Comment
                            <input
                                name='content'
                                type='text'
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