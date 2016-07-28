import React from 'react'
import Header from './Header'
import ACTIONS from '../actions'

const AskView = React.createClass ({
    render: function() {
        return (
            <div className = 'compose'>
                <Header />
                <Ask />
            </div>
        )
    }
})

const Ask = React.createClass ({

    _handleSubmit:function(evt) {
        evt.preventDefault()

        ACTIONS._submitQuestion({
            question: evt.target.question.value,
            content: evt.target.content.value
        })
    },

    render: function() {
        return (
            <form className = 'composeBody' onSubmit = {this._handleSubmit}>
                <input type = 'text' placeholder = 'What is your question?' name = 'question' />
                <textarea placeholder = 'Tell us a little about it.' name = 'content' ></textarea>
                <button type = 'submit'>Ask us!</button>
            </form>
        )
    }
})

export default AskView