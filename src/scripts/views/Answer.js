import Backbone from 'backbone'
import React from 'react'
import AnswerView from './answerView'
import ACTIONS from '../actions'
import {User} from '../models/models'

const ResponseView = React.createClass ({
    render: function() {
        return (
            <div className = 'answerView'>
                <Respond model = {this.props.model}/>
            </div>
        )
    }
})

const Respond = React.createClass ({

    _handleAnswerSubmit: function(evt) {
        evt.preventDefault()


        ACTIONS._submitAnswer({
            answer: evt.target.answer.value,
            username: User.getCurrentUser().username,
            authorId: User.getCurrentUser()._id,
            questionId: this.props.model.get('_id'),
            isAnswer: false
        })
    },

    render: function() {
        console.log(this.props.model.get('_id'))
        return (
            <div className = 'answerBody'>
                <form className = 'submitAnswer' onSubmit = {this._handleAnswerSubmit}>
                    <textarea className = 'giveAnswer' name = 'answer' placeholder = 'I have an answer for that!'></textarea>
                    <button type = 'submit' className = 'handleAnswerSubmit'>Submit</button>
                </form>
            </div>
        )
    }
})

export default ResponseView