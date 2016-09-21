import React from 'react'
import Header from './Header'
import STORE from '../store'
import ACTIONS from '../actions'
import {User, QuestionModel, QuestionCollection, AnswerModel, AnswerCollection, MessageModel, MessageCollection} from '../models/models'
import Footer from './Footer'

const MessageView = React.createClass ({
    render: function() {
        return (
            <div class = ''>
                <Header />
                <InboxView />
                <Footer />
            </div>
        )
    }
})

const InboxView = React.createClass ({
    render: function() {
        return (
            <div class = 'inbox'>
                <div class = 'messages'></div>
            </div>
            )
    }
})

export default MessageView