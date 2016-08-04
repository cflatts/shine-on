import React from 'react'
import Header from './Header'
import STORE from '../store'
import ACTIONS from '../actions'
import ResponseView from './Response'
import {User, QuestionModel, QuestionCollection, AnswerCollection, AnswerModel} from '../models/models'

const AnswerView = React.createClass ({

    getInitialState: function() {
        return STORE._getData()
    },

    componentWillMount: function() {

        var queryForSingleQuestion = {
            questionId: this.props.questionId
        }

        var queryForAnswers = {
            questionId: this.props.questionId
        }
        ACTIONS._fetchSingleQuestion(queryForSingleQuestion)
        ACTIONS._fetchAnswers(queryForAnswers)


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
                <QuestionBody answerColl = {this.state.answerCollection}  model = {this.state.model} />
                <ResponseView model = {this.state.model}/>
                <Answer model = {this.state.model} answerColl = {this.state.answerCollection} />
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

    _getPostedOn: function() {
        var dateString = this.props.model.get('createdAt')

        return dateString
    },

    render: function() {
        return (
            <div className = 'dashboardBody'>
                <div className = 'left'>
                    <a href = {`#question/${this.props.model.get('_id')}`}>question: {this.props.model.get('question')}</a>
                    <p>content: {this.props.model.get('content')}</p>
                </div>
                <div className = 'right'>
                    <p>posted by: {this.props.model.get('username')}</p>
                    <p>posted on: {this._getPostedOn()} </p>
                    <p>tags: {this.props.model.get('tags')}</p>
                    <p>answered: {this._getAnsweredStatus()}</p>
                    <p> # of answers: {this.props.answerColl.models.length}</p>
                </div>
                <hr />
            </div>
        )
    }
})


const Answer = React.createClass({

    _createAnswer: function(model) {
        return <AnswerBody model = {this.props.model} answerModel = {model} />
       },

    render: function() {
        console.log(this.props.model)
        var answers = this.props.answerColl.map(this._createAnswer)
        // console.log(answers)
        return(
            <div>
                {answers}
            </div>
        )
    }
})

const AnswerBody = React.createClass ({

    _getPostedOn: function() {
        var dateString = this.props.answerModel.get('createdAt')
        return dateString
    },

    _handleAnswerDelete: function() {
        ACTIONS._deleteAnswer(this.props.answerModel.get('_id'))
    },

    _handleButtonClass: function() {
        var buttonClass
        if(User.getCurrentUser()._id === this.props.answerModel.get('authorId')) {
            buttonClass = 'active'
        }
        else {
            buttonClass = 'inactive'
        }
        return buttonClass
    },

    _handleCheckClass: function() {
        var checkClass
        if(User.getCurrentUser()._id === this.props.model.get('authorId')) {
            checkClass = 'active'
        }
        else {
            checkClass = 'inactive'
        }
        return checkClass
    },

    render: function() {
        console.log(this.props.answerModel)
        return (
            <div className = 'dashboardBody answers'>
                <div className = 'left'>
                    <p id = 'answer'>Answer: {this.props.answerModel.get('answer')}</p>
                </div>
                <div className = 'right'>
                    <p>Posted By:{this.props.answerModel.get('username')}</p>
                    <p>Posted On: {this._getPostedOn()}</p>
                    <button className = {this._handleButtonClass()} type= 'button' onClick = {this._handleAnswerDelete}>Remove</button>
                    <label className = {this._handleCheckClass()}><input onChange = {this._handleAnswerCheck} type = 'checkbox' value = 'answer' name = 'answerCheck' />This is the answer</label>
                </div>
                <div>
                    <p className = {this._handleAnswerMarkerClass()}>Answer!</p>
                </div>
                <hr/>
            </div>
        )
    }
})

export default AnswerView