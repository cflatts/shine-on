import React from 'react'
import Header from './Header'
import STORE from '../store'
import ACTIONS from '../actions'
import {User, QuestionModel, QuestionCollection} from '../models/models'
import DashboardView from './dashboardView'

const AnswerView = React.createClass ({


    render: function() {
        return (
            <div className = 'singleQuestion'>
                <DashboardView />
                <Answers />
            </div>
        )
    }
})

const Answers = React.createClass ({

    _handleAnswerSubmit: function(evt) {
        evt.preventDefault()

        ACTIONS._submitAnswer ({
            answer: evt.target.answer.value,
            authorId: User.getCurrentUser()._id,
            username: User.getCurrentUser().username,

        })
    },

    render: function() {
        return (
            <div className = 'responseView'>
                <div className = 'topAnswer'></div>
                <form>
                    <textarea name = 'answer'>I have an answer for that!</textarea>
                    <label><input type = 'checkbox' name = 'answer' />This is the answer</label>
                    <button onSubmit = {this._handleAnswerSubmit}>Submit</button>
                    <hr />
                </form>
            </div>
        )
    }
})

export default AnswerView