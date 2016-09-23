import React from 'react'
import {User, MessageModel, MessageCollection} from '../models/models'
import Header from './Header'
import ACTIONS from '../actions'

const MessageComposeView = React.createClass ({

    render: function() {
        return (
            <div className= 'messageCompose'>
                <Header />
                <MessageComposeForm />
            </div>
        )
    }
})

const MessageComposeForm = React.createClass ({

    _handleMessageSubmit = function(evt) {
        evt.preventDefault()

        ACTIONS._submitMessage ({
            to: evt.target.to.value,
            from: evt.target.from.value,
            message: evt.target.message.value
        })
    },

    render: function() {
        return (
            <div className = 'messageComposeBody'>
                <form className = 'messageComposeForm' onSubmit = {this._handleMessageSubmit}>
                    <p name = 'to'>To:</p>
                    <p name = 'from'>From: {User.getCurrentUser().username}</p>
                    <textarea placeholder = 'Send a message!' name = 'message' id = 'message'></textarea>
                    <button type = 'submit'>Send</button>
                </form>
            </div>
        )
    }
})

export default MessageComposeView