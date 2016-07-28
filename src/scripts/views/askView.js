import React from 'react'
import Header from './Header'

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

    render: function() {
        return (
            <form className = 'composeBody'>
                <input type = 'text' placeholder = 'What is your question?' name = 'question' />
                <textarea placeholder = 'Tell us a little about it.' name = 'content' ></textarea>
                <button type = 'submit'>Ask us!</button>
            </form>
        )
    }
})

export default AskView