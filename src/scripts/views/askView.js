import React from 'react'
import Header from './Header'

const AskView = React.createClass ({
    render: function() {
        return (
            <div className = 'compose'>
                <Header />
                <Compose />
            </div>
        )
    }
})

const Ask = React.createClass ({

    render: function() {
        return (
            <form className = 'composeBody'>
                <input type = 'text' placeholder = 'What is your question?' name = 'question' />
                <textarea placeholder = 'Tell us a little about it.' name = 'content' ></textarea>
                <button type = 'submit' onSubmit = {this._handleSubmit}>Ask us!</button>
            </form>
        )
    }
})

export default AskView