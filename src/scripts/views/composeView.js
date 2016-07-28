import React from 'react'
import Header from './Header'
import {ACTIONS} from '../actions'

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

        ACTIONS.saveQuestion({
            question: evt.target.question.value,
            content: evt.target.content.value,

        })
    },

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

export default ComposeView