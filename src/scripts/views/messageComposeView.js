import React from 'react'
import {User, MessageModel, MessageCollection} from '../models/models'

const MessageComposeView = React.createClass ({

    render: function() {
        return (
            <div className = 'messageCompose'>
                <form className = 'messageComposeBody'>
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