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

    render: function() {
        return (
            <div className = 'messageComposeBody'>
                <form className = 'messageComposeForm'>
                    <p>To:</p>
                    <p>From: {User.getCurrentUser().username}</p>
                    <textarea placeholder = 'Send a message!'></textarea>
                    <button type = 'submit'>Send</button>
                </form>
            </div>
        )
    }
})

export default MessageComposeView