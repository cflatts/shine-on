import React from 'react'
import Header from './Header'
import STORE from '../store'
import ACTIONS from '../actions'
import {User, QuestionModel, QuestionCollection, AnswerCollection, AnswerModel} from '../models/models'

const AnswerView = React.createClass ({

    getInitialState: function() {
        return STORE._getData()
    },

    componentWillMount: function() {
        console.log(this.state.model)
        console.log(this.props.questionId)

        var queryForSingleQuestion = {
            questionId: this.props.questionId
        }

        console.log(queryForSingleQuestion)
        ACTIONS._fetchSingleQuestion(queryForSingleQuestion)
        STORE.on('updateContent', () => {
            this.setState(STORE._getData())
        })

    },

    componentWillUnmount: function() {
        STORE.off('updateContent')
    },

    render: function() {
        return (
            <div className = 'dashboard'>
                <Header />
                <QuestionBody answerColl = {this.state.answerColl} model = {this.state.model} />
            </div>
        )
    }
})

const QuestionBody = React.createClass ({

    _getAnsweredStatus: function() {
        if(this.props.model.get('answered') === false) {
            return 'NO'
        }
        else {
            return 'YES'
        }
    },

    _submitAnswerSubmit: function(evt) {
        evt.preventDefault()

        ACTIONS._submitAnswer ({
            answer: evt.target.answer.value,
            username: User.getCurrentUser().username,
            authorId: User.getCurrentUser()._id,
            questionId: this.props.model.get('_id'),
            isAnswer: false
        })
    },

    _getPostedOn: function() {
        var dateString = this.props.model.get('createdAt')
        return dateString
    },

    render: function() {
        console.log(this.props)
        return (
            <div className = 'dashboardBody'>
                <a href = {`#question/answer/${this.props.model.get('_id')}`}>question: {this.props.model.get('question')}</a>
                <p>content: {this.props.model.get('content')}</p>
                <p>posted by: {this.props.model.get('username')}</p>
                <p>posted on: {this._getPostedOn()}</p>
                <p>tags:{this.props.model.get('tags')[0]}</p>
                <p>answered: {this._getAnsweredStatus()}</p>
                <p># of answers: 0</p>
                <textarea name = 'answer' placeholder = 'I have an answer for that!'></textarea>
                <button onSubmit = {this._submitAnswer}>Submit</button>
                <hr />
                <Answer />
            </div>
        )
    }
})

const Answer = React.createClass ({
    render: function() {
        return (
            <div className = 'responseView'>
                <form>
                    <label><input type = 'checkbox' name = 'answer' />This is the answer</label>
                    <p></p>
                    <hr />
                </form>
            </div>
        )
    }
})

export default AnswerView