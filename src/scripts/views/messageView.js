import React from 'react'
import Header from './Header'
import STORE from '../store'
import ACTIONS from '../actions'
import {User, QuestionModel, QuestionCollection, AnswerModel, AnswerCollection, MessageModel, MessageCollection} from '../models/models'
import Footer from './Footer'

const MessageView = React.createClass ({
    render: function() {
        return (
            <div className = 'inboxView'>
                <Header />
                <InboxView />
                <Footer />
            </div>
        )
    }
})

const InboxView = React.createclassName ({
    render: function() {
        return (
            <div className = 'inbox'>
                <div className = 'messages'></div>
            </div>
            )
    }
})

export default MessageView