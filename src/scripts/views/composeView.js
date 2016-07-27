import React from 'react'
import Header from './Header'

const ComposeView = React.createClass ({
    render: function() {
        return (
            <div className = 'compose'>
                <Header />
                <Compose />
            </div>
        )
    }
})

const Compose = React.createClass ({

    _handleSubmit: function(evt) {
        evt.preventDefault()
    },

    render: function() {
        return (
            <form className = 'composeBody'>
                <input type = 'text' placeholder = 'What is your question?' name = 'question' />
                <textarea placeholder = 'Tell us a little about it.' name = 'context' ></textarea>
                <button type = 'submit' onSubmit = {this._handleSubmit}>Ask us!</button>
            </form>
        )
    }
})

export default ComposeView