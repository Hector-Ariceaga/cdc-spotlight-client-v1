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
                <form onSubmit={this.handleOnSubmit} >
                    <div className='form-group'>
                        <label> Title
                            <input
                                class='form-control'
                                name='title'
                                type='text'
                                value={ title }
                                onChange={this.handleOnChange} />
                        </label>
                    </div>
                    <div>
                        <label className='form-group'> Author
                            <input
                                class='form-control'
                                name='author'
                                type='text'
                                value={ author }
                                onChange={this.handleOnChange} />
                        </label>
                    </div>
                    <div className='form-group'>
                        <label> Description
                            <input
                                class='form-control'
                                name='description'
                                type='text'
                                value={ description }
                                onChange={this.handleOnChange} />
                        </label>
                    </div>
                    <div>
                        <label className='form-group'> Content
                            <textarea
                                class='form-control custom-textarea'
                                name='content'
                                value={ content }
                                onChange={this.handleOnChange} />
                        </label>
                    </div>
                    <div>
                        <input type='submit' class="btn btn-primary mb-2" rows={10} value={this.props.submitValue} />
                    </div>
                </form>
            </div>
        )
    }
}